import React, { useState, useEffect, useContext } from "react";
import Carousel from "../Carousel";
import { context } from "../../context";
import "./product.css";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { product } = useContext(context);

  function handleClick(e) {
    console.dir(e.target);
    if (e.target.className === "fas fa-plus") {
      setQuantity(quantity + 1);
    } else if (e.target.className === "fas fa-minus" && quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

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
      {product && (
        <>
          <div className="product-container">
            <img
              className="product-img"
              src={product.image_url}
              alt={product.name}
            />

            <div className="product-text-container">
              <div className="product-heading">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-brand">
                  Brand:
                  <a
                    className="product-brand-link"
                    href="https://primepotence.wixsite.com/primepotence"
                  >
                    Prime Potence
                  </a>
                </p>
              </div>
              <p className="product-price">
                {product.shipping_and_handling.currency}
                {product.shipping_and_handling.price}
              </p>
              <ul className="product-benefits">
                <li className="product-benefit">Big man</li>
                <li className="product-benefit">Strong man</li>
                <li className="product-benefit">Good man</li>
                <li className="product-benefit">Alpha man</li>
              </ul>
            </div>
            <div className="product-btn-container">
              <div className="product-quantity-container">
                <i onClick={handleClick} className="fas fa-minus"></i>
                <p className="product-quantity">{quantity}</p>
                <i onClick={handleClick} className="fas fa-plus"></i>
              </div>
              <a className="btn" href={product.click_url}>
                Buy now
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
