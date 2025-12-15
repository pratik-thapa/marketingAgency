"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS styles

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds (1 second)
      once: true, // Whether animation should happen only once - while scrolling down
      easing: "ease-out-cubic", // Smoothing effect
    });
  }, []);

  return null;
}
