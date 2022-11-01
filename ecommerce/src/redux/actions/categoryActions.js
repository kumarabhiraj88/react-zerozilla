import axios from "axios";

export const getCategories = async () => {
  try {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    return result;
  } catch (error) {
    console.log("Something went wrong" + error);
  }
};
