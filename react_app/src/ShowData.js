import data from "./data.js";
import "./index.css";
import * as emoji from "node-emoji";

export const DataMap = () => {
  return (
    <>
      <h1>
        {emoji.random().emoji} Bruce Image Gallery{" "}
        <sup style={{ color: "#6F8AB4", fontSize: "1rem" }}>
          with node-emoji
        </sup>
        {emoji.random().emoji}
      </h1>

      <div className="pictures">
        {data.map((item) => (
          <>
            <div className="picture">
              <div className="imageContainer">
                <img
              
                  src={item.src.large}
                  alt=""
                />
              </div>
              <div className="info">
                <p>
                  {emoji.random().emoji} {item.photographer}{" "}
                  {emoji.random().emoji}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
