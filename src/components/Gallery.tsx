import pic1 from "../assets/pics/pic1.png";
import pic2 from "../assets/pics/pic2.png";
import pic3 from "../assets/pics/pic3.png";
import pic4 from "../assets/pics/pic4.png";
import pic5 from "../assets/pics/pic5.png";
import pic6 from "../assets/pics/pic6.png";
import pic7 from "../assets/pics/pic7.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div className="d-flex justify-content-end" id="gallery">
      <div className="menu">
        <div className="menuItem">
          <h3>Galerie</h3>
        </div>
      </div>
      <div className="landingPageFilter2">
        <div className="bgcolor" />
        <div className="landingPageFilter2body">
          <div className="d-flex flex-column">
            <h4 className="mb-5 mt-2">
              Zde si můžete prohléhnout jak naše služby probíhají
            </h4>
            <Carousel centerMode dynamicHeight infiniteLoop>
              <div>
                <img src={pic1} />
              </div>
              <div>
                <img src={pic2} />
              </div>
              <div>
                <img src={pic3} />
              </div>
              <div>
                <img src={pic4} />
              </div>
              <div>
                <img src={pic5} />
              </div>
              <div>
                <img src={pic6} />
              </div>
              <div>
                <img src={pic7} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
