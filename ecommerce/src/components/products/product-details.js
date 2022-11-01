import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import { getProductDetails } from "../../redux/actions/productActions.js";
import Rating from "./rating.js";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;

  const [product, setProduct] = useState([]);
  const { rating } = product;

  useEffect(() => {
    const result = getProductDetails(productId);
    result.then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  return (
    <>
      <div>
        <Row>
          <Col md={6}>
            <img
              className="img-large"
              src={product.image}
              alt={product.title}
            />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                //rating={rating.rate}
                //count={rating.count}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price{product.price}</ListGroup.Item>

              <ListGroup.Item>
                <p>Description {product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
