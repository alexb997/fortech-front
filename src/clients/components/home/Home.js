import AboutUs from "./AboutUs";
import Guide from "./Guide";
import Contact from "./Contact";
import NavBar from "../../../navigation/navBar";

import "./Home.css";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

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
        <Guide />
        <ImageGallery items={images} />
        <Contact />
      </Container>
    </div>
  );
}

export default Home;
