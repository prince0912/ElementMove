import "./styles.css";
import { useState } from "react";

export default function App() {
  const [xoffset, setXoffset] = useState(0);
  const [yoffset, setYoffset] = useState(0);
  const [delta, setDelta] = useState(10);

  const moveRight = () => {
    setXoffset(() => xoffset + delta);
  };
  const moveLeft = () => {
    setXoffset(() => xoffset - delta);
  };
  const moveTop = () => {
    setYoffset(() => yoffset - delta);
  };
  const moveBottom = () => {
    setYoffset(() => yoffset + delta);
  };

  return (
    <div className="App">
      <h2
        style={{
          position: "absolute",
          left: `${xoffset}px`,
          top: `${yoffset}px`,
          color: "blue"
        }}
      >
        Pkumar
      </h2>
      <div style={{ marginTop: "80px" }}>
        <button className="btn btn-primary" onClick={moveRight}>
          Right
        </button>
        <button className="btn" onClick={moveLeft}>
          Left
        </button>
        <button className="btn" onClick={moveTop}>
          Top
        </button>
        <button className="btn" onClick={moveBottom}>
          Bottom
        </button>
      </div>
    </div>
  );
}
