import React, { useRef, useEffect } from "react";
// import "./ScrollContainer.css"; // Import the CSS file for styling
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.png";
import slide5 from "./slide5.png";
import slide6 from "./slide6.png";
import slide7 from "./slide7.png";

import Menu from "./Menu.svg";

function ScrollContainer() {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (event) => {
      const scrollSpeed = 10; // Adjust the scroll speed as per your preference
      const delta = Math.sign(event.deltaY); // Detect the direction of the touchpad scroll
      scrollContainer.scrollLeft += delta * scrollSpeed;
    };

    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div>
      <div>
        <img src={Menu} alt="" style={{ width: "100%" }} />
        <img src={slide1} alt=""  />
        <img src={slide2} alt="" />
      </div>

      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-content">
          {/* <img src={Menu}alt="" style={{width:"100%"}}/> */}
          <img src={slide5} alt=""  />
          <img src={slide6} alt=""  />
          <img src={slide7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ScrollContainer;
