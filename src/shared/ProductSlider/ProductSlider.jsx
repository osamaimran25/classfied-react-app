import "./ProductSlider.scss";
import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { showImage } from "../../utils";

const ProductSlider = ({ addDetail }) => {
  const images = [
    addDetail?.image_01,
    addDetail?.image_02,
    addDetail?.image_03,
    addDetail?.image_04,
    addDetail?.image_05,
  ];
  const image = images.map((el) => ({
    src: showImage(el),
    sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 500px, 400px",
    alt: `product-img`,
    thumbnail: showImage(el),
  }));

  return (
    <div className="product-slider">
      <Carousel images={image} />
    </div>
  );
};

export default ProductSlider;
