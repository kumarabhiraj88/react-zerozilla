import React, { useState } from "react";
import Categories from "../categories";
import Products from "../products/index.js";

const Home = (props) => {
  const [category, setCategory] = useState("");
  const filteredProducts = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Categories onClick={filteredProducts} />
      <Products category={category} searchData={props.searchData} />
    </>
  );
};

export default Home;
