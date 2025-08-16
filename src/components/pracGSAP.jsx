import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const PracGSAP = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        xPercent: 200,
        backgroundColor: "#999",
        color: "pink",
      },
      {
        backgroundColor: "red",
        xPercent: 0,
        color: "white",
        duration: 2,
      }
    );
  });
  return (
    <div className=" py-68 para">
      pracGSAP Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consectetur nihil distinctio quae fugit adipisci debitis aperiam sapiente
      minima, at itaque magnam tempora molestiae fugiat modi est, veritatis
      incidunt quasi.
    </div>
  );
};

export default PracGSAP;
