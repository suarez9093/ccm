import React, { useContext } from "react";
import { context } from "../../context";

export default function Loader() {
  const { product } = useContext(context);
  return (
    <>
      {!product && (
        <>
          <div className="product-loading-container">
            <h1 className="product-loading-title">Loading...</h1>
            <div className="lds-dual-ring"></div>
            <p className="product-loading-description">Product is loading</p>
          </div>
        </>
      )}
    </>
  );
}
