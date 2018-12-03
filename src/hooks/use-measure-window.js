import { useState, useEffect } from "react";

const useMeasureWindow = () => {
  const [size, setSize] = useState({
    width: window.outerWidth,
    height: window.outerHeight
  });
  const updateSize = e => {
    setSize({
      width: e.target.outerWidth,
      height: e.target.outerHeight
    });
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("risze", updateSize);
    };
  });
  return {
    ...size
  };
};

export default useMeasureWindow;
