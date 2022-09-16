import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import {
  Container, Row, Col, ListGroup, Image, Form, Button, Card
} from "react-bootstrap";

import Message from '../components/Message'
import { addToCart } from "../actions/cartActions";

const CartScreen = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  console.log(cart)
  // const {cartItem} = cart
  // console.log(cartItem)


  const { id } = useParams(); // use useParams() to match the params in url
  const productId = id
  console.log(productId)

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(qty)

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  },[dispatch, productId, qty])

  return (
    <div className="cart_screen_wrapper py-3">
      <Container>
      <h1>Hello cart</h1>
      </Container>
    </div>
  );
};

export default CartScreen;
