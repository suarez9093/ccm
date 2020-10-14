import React, { useState, useEffect } from "react";
const context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    const url = `http://track.clickbooth.com/i?lid=11851&ua=${navigator.userAgent}&ip=${process.env.REACT_APP_IP}&subid1=&subid2=&subid3=&subid4=&subid5=`;
    const res = await fetch(url);
    const data = await res.json();
    setProduct(data.data);
  }

  return (
    <context.Provider
      value={{
        product,
        setProduct,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
