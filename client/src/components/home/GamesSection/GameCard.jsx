import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import Modal from "@/components/shared/Modal";

const GameCard = ({ game }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handlePlayClick = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }

    if (game?.link) {
      navigate(`/category/play/${game._id}`);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleDemoClick = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }

    if (game?.demoLink) {
      navigate(`/category/demo/${game._id}`);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="rounded-md">
        <div className="relative rounded-md group overflow-hidden bg-[#333]">
          {/* Gradient background */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>

          {/* Image */}
          <img
            className="w-full h-48 md:h-32 object-cover rounded-t-md z-0"
            src={`${import.meta.env.VITE_BASE_API_URL}${game?.image}`}
            alt="game"
          />

          {/* Hover Overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-20 transition-opacity duration-300 group-hover:opacity-70 rounded-[20px] lg:rounded-xl"></div>

          {/* Play + Demo Buttons */}
          <div className="absolute flex flex-col items-center justify-center gap-2 whitespace-nowrap text-xs top-1/4 left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
            <button onClick={handlePlayClick}>
              <PrimaryButton>প্লে গেম</PrimaryButton>
            </button>

            <button
              onClick={handleDemoClick}
              className="px-2 py-1 rounded border border-slate-600 hover:bg-slate-200 hover:text-black text-white text-center"
            >
              Demo
            </button>
          </div>

          {/* Game Title */}
          <div className="md:absolute bottom-0 text-white z-30">
            <h2 className="font-semibold text-sm p-2 px-2 whitespace-nowrap overflow-hidden">
              {game?.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </>
  );
};

export default GameCard;
