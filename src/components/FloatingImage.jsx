import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingImage = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default FloatingImage;
