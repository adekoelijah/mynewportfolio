import React, { useEffect, useRef } from "react";
import mixitup from "mixitup";

const Gallery = () => {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixerRef.current = mixitup(containerRef.current, {
        selectors: {
          target: ".mix"
        },
        animation: {
          duration: 300
        }
      });
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="controls">
        <button onClick={() => mixerRef.current.filter("all")}>All</button>
        <button onClick={() => mixerRef.current.filter(".category-a")}>
          Category A
        </button>
        <button onClick={() => mixerRef.current.filter(".category-b")}>
          Category B
        </button>
      </div>

      <div className="container" ref={containerRef}>
        <div className="mix category-a">Item 1</div>
        <div className="mix category-b">Item 2</div>
        <div className="mix category-a">Item 3</div>
        <div className="mix category-b">Item 4</div>
      </div>
    </div>
  );
};

export default Gallery;
