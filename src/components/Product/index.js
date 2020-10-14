import React, { useState, useEffect } from "react";

function Product() {
  const [product, setProduct] = useState();
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const url = `http://track.clickbooth.com/i?lid=11851&ua=${navigator.userAgent}&ip=${process.env.REACT_APP_IP}&subid1=&subid2=&subid3=&subid4=&subid5=`;
    const res = await fetch(url);
    const data = await res.json();
    setProduct(data.data);
  }
  //   const { click_url, image_url, name, shipping_and_handling } = product;
  //   console.log(shipping_and_handling);
  return (
    <div>
      {!product && <h1>Loading...</h1>}
      {product && (
        <>
          <h1>{product.name}</h1>
        </>
      )}
    </div>
  );
}

export default Product;
