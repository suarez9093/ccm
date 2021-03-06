import React, { useState, useContext } from "react";
import Loader from "../Loader";
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
      <Loader />
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

                <div className="product-rating-container">
                  <div className="product-stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="product-reviews"> (435 reviews)</span>
                </div>
              </div>
              <h2 className="product-price">
                {product.shipping_and_handling.currency}
                {product.shipping_and_handling.price}
              </h2>
              <h3 className="product-about-title">About the Item</h3>
              <ul className="product-benefits">
                <li className="product-benefit">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li className="product-benefit">
                  Nullam et orci leo. Orci varius natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus
                </li>
                <li className="product-benefit">
                  Duis in nulla sit amet elit dapibus scelerisque.
                </li>
                <li className="product-benefit">
                  In ultricies elementum luctus.
                </li>
              </ul>
              <div className="product-btn-container">
                <a className="btn" href={product.click_url}>
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
