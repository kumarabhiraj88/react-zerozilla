import axios from "axios";

export const getCategories = async () => {
  try {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    result.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
