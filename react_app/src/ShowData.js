import data from "./data.js";
import "./index.css";

export const DataMap = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <>
          <div className="imageCap">
            <img
              className="image1"
              style={{ width: "250px", height: "250px", borderRadius: "20px" }}
              src={item.src.large}
              alt=""
            />
          </div>

          <p style={{ color: "#6F8AB4" }}>{item.photographer}</p>
        </>
      ))}
    </div>
  );
};