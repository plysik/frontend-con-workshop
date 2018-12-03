import React from "react";
import { useMeasureWindow } from "../hooks";

const WindowMeasure = () => {
  const { width, height } = useMeasureWindow();
  return (
    <div>
      <h2>WindowMeasure solution</h2>
      <p>{`Window size is: ${width}px X ${height}px.`}</p>
    </div>
  );
};

export default WindowMeasure;
