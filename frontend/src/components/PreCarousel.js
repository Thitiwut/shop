import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function PreCarousel() {
    const dispatch = useDispatch();

    const productTopRated = useSelector((state) => state.productTopRated);
    const { loading, error, products } = productTopRated;

    React.useEffect(() => {
        dispatch(listTopProducts());
    }, [dispatch]);

    return loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <Carousel breakPoints={breakPoints}>
        {products.map((product) => (
          <Link to={`/product/${product._id}`}>
            <Item>
              <Image src={`${product.image}`} alt={product.name} thumbnail />
            </Item>
          </Link>
        ))}
      </Carousel>
    );
}

export default PreCarousel
