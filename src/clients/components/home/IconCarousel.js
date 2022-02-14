import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";

function IconCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
  };
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType="desktop"
      responsive={responsive}
      className="carousel-icons"
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        src="https://www.carmax.com/home/images/shared/icons/vehicle-types/minivans-and-vans.svg"
      />
    </Carousel>
  );
}

export default IconCarousel;
