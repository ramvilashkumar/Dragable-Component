import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./DragableStyle.css";

const DragableComponent = () => {
  //   const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Draggable
        onStop={() => setIsActive1(false)}
        onDrag={() => {
          setIsActive1(true);
        }}
      >
        <div className={isActive1 ? "box-active" : "box"}>
          <div>Move me around!</div>
        </div>
      </Draggable>

      <Draggable
        onStop={() => setIsActive2(false)}
        onDrag={() => {
          setIsActive2(true);
        }}
      >
        <div className={isActive2 ? "box-active" : "box"}>
          <div>Move me around1!</div>
        </div>
      </Draggable>
    </div>
  );
};

export default DragableComponent;
