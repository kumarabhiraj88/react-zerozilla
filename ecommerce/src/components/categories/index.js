import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as categoryTypes from "../../redux/types/categoryTypes.js";

const Categories = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: categoryTypes.CATEGORY_FETCH_REQUEST });
    try {
      const result = getCategories();
      result.then((res) => {
        dispatch({
          type: categoryTypes.CATEGORY_FETCH_SUCCESS,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({
        type: categoryTypes.CATEGORY_FETCH_FAIL,
        payload: error.message,
      });
    }
  }, []);

  const { categoryList } = useSelector((state) => state.categoryReducer);

  return (
    <>
      <div className="categories">
        <Row>
          {categoryList.map((category, index, arr) => {
            return (
              <Col key={index} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title
                      style={{ cursor: "pointer" }}
                      onClick={() => props.onClick(category)}
                    >
                      {category}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Categories;
