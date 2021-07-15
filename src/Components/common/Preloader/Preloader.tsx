import React from "react";
import preloader from "../../../assets/preloader/preloader.svg";

const Preloader = () => {
  return (
    <div>
      <img
        alt="preloader"
        src={preloader}
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
        }}
      />
    </div>
  );
};

export default Preloader;
