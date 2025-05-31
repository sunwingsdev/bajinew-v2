import Container from "@/components/shared/Container";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";

import { useParams } from "react-router";

const PlayGame = () => {
  const { id } = useParams();

  const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const selectedGame = allHomeGames?.find((game) => game._id == id);

  return (
    <div className="bg-[#4e4e4e]">
      <Container>
        {/* Ensure demo link is available before embedding */}
        {selectedGame?.link ? (
          <iframe
            className="w-full max-h-[700px] h-[700px]"
            src={selectedGame.link}
            frameBorder="0"
          ></iframe>
        ) : (
          <div>No demo available for this game.</div>
        )}
      </Container>
    </div>
  );
};

export default PlayGame;
