import React from "react";

const Loader = () => (
  <div className="Loader-root">
    <img src="/rick_loading_small.gif" alt="loading" className="Loader-img" />
    <style jsx>{`
      .Loader-root {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .Loader-img {
        width: auto;
      }
    `}</style>
  </div>
);

export default Loader;
