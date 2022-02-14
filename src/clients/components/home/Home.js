import AboutUs from "./AboutUs";
import Guide from "./Guide";
import Recommended from "./Recommended";
import NavBar from "../../../navigation/navBar";

import "./Home.css";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import FindCar from "./FindCar";

function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="home">
      <Container>
        <NavBar />
        <AboutUs />
        <FindCar />
        <Guide />
        <Recommended />
        <ImageGallery items={images} />
      </Container>
    </div>
  );
}

export default Home;
