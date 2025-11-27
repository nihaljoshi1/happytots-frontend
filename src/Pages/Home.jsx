import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./Home.css";
import axios from "axios";

import { HeroSection } from "../components/Hero";
import { BusJourney } from "../components/Usp";
import { Programs } from "../components/Programs";
import { Room } from "../components/ConceptRoom";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [homeImages, setHomeImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=home`
        );

        if (res.data.success) {
          setHomeImages(res.data.images);
        }
      } catch (error) {
        console.error("Home images failed:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <>
      <HeroSection banner={homeImages[0]} />
      <BusJourney />
      <Programs />
      <Room />
      <Testimonial />
    </>
  );
};

export default Home;