import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import myImage1 from "../assets/cam1.jpg";
import myImage2 from "../assets/cam2.jpg";
import myImage3 from "../assets/cam3.jpg";
import myImage4 from "../assets/cam4.jpg";
// Adjust the path if necessary

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../pages/home.css";
import Header from "../components/Header";
import Nimages from "../components/Nimages";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <Header />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source src="src/assets/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source src="src/assets/videoplayback (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source
              src="src/assets/Nikon Z 8 _ Product tour of our new full-frame hybrid camera (1).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source src="src/assets/videoplayback (2).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source
              src="src/assets/Nikon Z 8 _ Product tour of our new full-frame hybrid camera (1).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video muted autoPlay loop playsInline>
            <source src="src/assets/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <h2 style={{fontWeight:'bolder'}}>
      New<span style={{ color: "red" }}>Arrival</span>{" "}
      </h2>
      <div className="maincard">
        <div className="image-card">
          <div className="image-container">
            <img src={myImage1} alt="" className="image" />
            <div className="overlay">
              <button className="btn btn-primary">ADD CART</button>
            </div>
          </div>
          <div className="card-content">
            <h5>GoPro HERO</h5>
            <p>₹24,999</p>
          </div>
        </div>
        <div className="image-card">
          <div className="image-container">
            <img src={myImage2} alt="" className="image" />
            <div className="overlay">
              <button className="btn btn-primary">ADD CART</button>
            </div>
          </div>
          <div className="card-content">
            <h5>Insta360</h5>
            <p>₹34,899</p>
          </div>
        </div>

        <div className="image-card">
          <div className="image-container">
            <img src={myImage3} alt="" className="image" />
            <div className="overlay">
              <button className="btn btn-primary">ADD CART</button>
            </div>
          </div>
          <div className="card-content">
            <h5>Nikon Z6</h5>
            <p>₹184,290</p>
          </div>
        </div>

        <div className="image-card">
          <div className="image-container">
            <img src={myImage4} alt="" className="image" />
            <div className="overlay">
              <button className="btn btn-primary">ADD CART</button>
            </div>
          </div>
          <div className="card-content">
            <h5>GoPro HERO11</h5>
            <p>₹44,599</p>
          </div>
        </div>
      </div>
      <Nimages/>
      <Footer/>
    </div>
  );
}

export default Home;