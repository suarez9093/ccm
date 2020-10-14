import React, { useState, useEffect, useContext } from "react";
import { context } from "../../context";
import "./product.css";

function Product() {
  const { product, quantity } = useContext(context);
  //   const [product, setProduct] = useState();
  //   const [quantity, setQuantity] = useState(1);
  //   useEffect(() => {
  //     getProduct();
  //   }, []);

  //   async function getProduct() {
  //     const url = `http://track.clickbooth.com/i?lid=11851&ua=${navigator.userAgent}&ip=${process.env.REACT_APP_IP}&subid1=&subid2=&subid3=&subid4=&subid5=`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProduct(data.data);
  //   }
  console.log(product);
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
            <img
              className="product-img"
              src="https://images-na.ssl-images-amazon.com/images/I/81dNaXXxN%2BL._AC_SL1500_.jpg"
              alt={product.name}
            />
            <div className="product-text-container">
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
              <input
                className="product-quantity"
                type="text"
                placeholder={quantity}
              />
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
