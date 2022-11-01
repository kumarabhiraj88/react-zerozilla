import axios from "axios";

export const getProducts = async (category) => {
  try {
    const result = await axios.get(`https://fakestoreapi.com/products`);
    return result;
    // if (category) {
    //   const result = await axios.get(
    //     `https://fakestoreapi.com/products/category/${category}`
    //   );
    //   return result;
    // } else {
    //   const result = await axios.get(`https://fakestoreapi.com/products`);
    //   return result;
    // }
  } catch (error) {
    console.log("Something went wrong" + error);
  }
};

export const getProductDetails = async (productId) => {
  try {
    const result = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    return result;
  } catch (error) {
    console.log("Something went wrong" + error);
  }
};
