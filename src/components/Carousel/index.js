import React, { useContext } from "react";
import { context } from "../../context";
import "./carousel.css";

function Carousel() {
  const { product } = useContext(context);
  console.log(product);
  return;
}

export default Carousel;
