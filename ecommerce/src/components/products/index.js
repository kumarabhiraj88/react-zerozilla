import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions.js";
import Rating from "./rating.js";
import * as productTypes from "../../redux/types/productTypes.js";

const Products = (props) => {
  const dispatch = useDispatch();

  const [filteredProducts, setFilteredProducts] = useState([]);

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
  }, []);

  const { productList } = useSelector((state) => state.productReducer);

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {
          <Row>
            {productList
              .filter((res) => {
                if (props.category === "") {
                  return res;
                } else if (res.category.includes(props.category)) {
                  return res;
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
                        <Card.Title>Card Title</Card.Title>
                      </Link>
                      <Rating
                        rating={product.rating.rate}
                        count={product.rating.count}
                      />
                      <Card.Text>${product.price}</Card.Text>
                      <Button variant="primary">Add to cart</Button>
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
