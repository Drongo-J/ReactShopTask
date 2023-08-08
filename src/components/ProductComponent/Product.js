import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { id, name, price, discount, colors, isExpired } = product;

  const [currentImage, setCurrentImage] = useState(
    product.getImageUrl(product.colors[0])
  );

  const handleColorClick = (color) => {
    setCurrentImage(product.getImageUrl(color));
  };

  const sizes = [7, 8, 9, 10, 11];
  const [selectedSize, setSelectedSize] = useState("");

  // Function to randomly select a size and mark it as active
  const randomlySelectSize = () => {
    const randomIndex = Math.floor(Math.random() * sizes.length);
    setSelectedSize(sizes[randomIndex]);
  };

  // Call the function to randomly select a size on component mount
  useEffect(() => {
    randomlySelectSize();
  }, []);

  return (
    <div className="card" key={`product-${id}`}>
      {isExpired && (
        <div className="expired-overlay">
        </div>
      )}
      <div className="left">
        <img className="product-image" src={currentImage} alt={name}></img>
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <h1
              onClick={() => window.open("https://aykhan.net", "_blank")}
              style={{ cursor: "pointer" }}
            >
              aykhan.net
            </h1>
          </div>
          <div className="details">
            <h3>KhanStore Collection</h3>
            <h2>{name}</h2>
            <h4>
              <span className="fa fa-dollar"></span>
              {Math.round(price * (1 - discount))}.99$
            </h4>
            <h4 className="dis">
              <span className="fa fa-dollar"></span>
              {price}$
            </h4>
          </div>
          <ul key={`sizes-${id}`}>
            <li>SIZE</li>
            {sizes.map((size, index) => (
              <li
                key={index}
                className={`bg ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
          <ul key={`colors-${id}`}>
            <li>COLOR</li>
            {colors.map((color, index) => (
              <li
                key={`${id}-${index}`}
                onClick={() => handleColorClick(color.toLowerCase())}
                className={color.toLowerCase()}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
