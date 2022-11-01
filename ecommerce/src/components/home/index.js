import React, { useState } from "react";
import Categories from "../categories";
import Products from "../products/index.js";

const Home = () => {
  const [category, setCategory] = useState("");
  const filteredProducts = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Categories onClick={filteredProducts} />
      <Products category={category} />
    </>
  );
};

export default Home;
