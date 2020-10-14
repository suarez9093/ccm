import React, { useState, useEffect } from "react";
import "./product.css";

function Product() {
  const [product, setProduct] = useState();
  //   useEffect(() => {
  //     getProduct();
  //   }, []);

  async function getProduct() {
    const url = `http://track.clickbooth.com/i?lid=11851&ua=${navigator.userAgent}&ip=${process.env.REACT_APP_IP}&subid1=&subid2=&subid3=&subid4=&subid5=`;
    const res = await fetch(url);
    const data = await res.json();
    setProduct(data.data);
  }
  console.log(product);
  return (
    <>
      {!product && (
        <>
          <h1>Loading...</h1>
          <div className="lds-dual-ring"></div>
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
              <h1 className="product-title">{product.name}</h1>
              <p className="product-price">
                {product.shipping_and_handling.currency}
                {product.shipping_and_handling.price}
              </p>
              <a href={product.click_url}>Buy now</a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
