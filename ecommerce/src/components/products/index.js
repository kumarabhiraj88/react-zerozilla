import React, { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions.js";
import Rating from "./rating.js";
import * as productTypes from "../../redux/types/productTypes.js";
import { addToCart, getCartTotal } from "../../redux/reducers/cartSlice.js";

const Products = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch({ type: productTypes.PRODUCT_FETCH_REQUEST });
    try {
      const result = getProducts();
      result.then((res) => {
        dispatch({
          type: productTypes.PRODUCT_FETCH_SUCCESS,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({
        type: productTypes.PRODUCT_FETCH_FAIL,
        payload: error.message,
      });
    }
  }, [dispatch]);

  const { productList } = useSelector((state) => state.productReducer);

  //const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //navigate("/cart");
  };

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {
          <Row>
            {productList
              .filter((res) => {
                // if (
                //   res.title
                //     .toLowerCase()
                //     .includes(props.searchData.toLowerCase())
                // ) {
                //   return res;
                // }
                if (
                  props.searchData === "" &&
                  res.category.includes(props.category)
                ) {
                  return res;
                } else if (
                  props.searchData !== "" &&
                  res.title
                    .toLowerCase()
                    .includes(props.searchData.toLowerCase())
                ) {
                  return res;
                } else {
                  return "";
                }
              })
              .map((product) => (
                <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                  <Card style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`}>
                      <Card.Img
                        className="card-img-top"
                        variant="top"
                        src={product.image}
                      />
                    </Link>
                    <Card.Body>
                      <Link to={`/product/${product.id}`}>
                        <Card.Title>{product.title}</Card.Title>
                      </Link>
                      <Rating
                        rating={product.rating.rate}
                        count={product.rating.count}
                      />
                      <Card.Text>${product.price}</Card.Text>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        variant="primary"
                      >
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        }
      </div>
    </>
  );
};

export default Products;
