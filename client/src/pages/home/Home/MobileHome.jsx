import { useOutletContext } from "react-router";
import HomeFavorite from "./HomeFavorite";
import HomeFeatures from "./HomeFeatures";
import HomeTabs from "./HomeTabs";
import ImageSlider from "./ImageSlider";
import Marquee from "./Marquee";

const MobileHome = () => {
  const { menuItems } = useOutletContext();
  return (
    <div className="bg-black">
      <ImageSlider />
      <Marquee />
      <HomeTabs menuItems={menuItems} />
      <HomeFavorite />
      <HomeFeatures />
    </div>
  );
};

export default MobileHome;
