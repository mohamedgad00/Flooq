"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      offset: 5,
      once: true,
      startEvent: 'DOMContentLoaded',
      useClassNames: true, // This enables the use of CSS classes for animations
      disableMutationObserver: false,
      throttleDelay: 99,
    });
  }, []);

  return null;
}
