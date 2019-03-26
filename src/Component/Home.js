import React from "react";
import { Carousel } from "react-bootstrap";
import p1 from "../Pictures/spacexjpg.jpg";
import p2 from "../Pictures/LargeHadron.jpg";
import p3 from "../Pictures/iss.jpg";
import p4 from "../Pictures/fullskymap.png";
const Home = () => {
  return (
    <div className="bg-dark">
      <div className="h-50 w-100">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={p1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={p2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={p3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={p4} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
