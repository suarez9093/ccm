import React, { useContext } from "react";
import { context } from "../../context";
import "./loader.css";

export default function Loader() {
  const { product } = useContext(context);
  return (
    <>
      {!product && (
        <>
          <div className="loading-container">
            <h1 className="loading-title">Loading...</h1>
            <div className="lds-dual-ring"></div>
            <p className="loading-description">Product is loading</p>
          </div>
        </>
      )}
    </>
  );
}
