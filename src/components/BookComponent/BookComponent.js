import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart,  decreaseCount } from '../../features/cart/cartSlice';
import { MdAddShoppingCart } from "react-icons/md";
import "./BookComponent.scss"
import { FormatDate, convertPrice } from "../../utils/helpers";
export default function BooksContent({ item }) {
  // console.log(item.name);
  const dispatch = useDispatch();
 
  const state = useSelector(state => state.cart)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
  const checkCartQty = () => {
    const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
    )

    if (cartItemIndex >= 0) {
        return state.cartItems[cartItemIndex].cartQuantity;
    }
    return 0;
}

  return (
    <div className="card-deck col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={item.image} alt={item.name}/>
                        <div className="card-body">
                            <h5 className="card-title genre">{item.name}</h5>
                            <h4 className="card-title title">{item.genre}</h4>
                            <h4 className="card-title date">Published: {FormatDate(item.published_date)}</h4>
                            <h4 className="card-title  price">Price: Rs.{convertPrice(item.price)}</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">
                                Stock: {(item.stock - checkCartQty())}
                                </small>
                                <div className="d-flex">
                                <p className="card-text text">
                
                                  {item.cartQuantity}
                                </p>

                                </div>

                                <p className="btn"> <MdAddShoppingCart onClick={() => handleAddToCart(item)} disabled={item.stock === 0}/></p>
                            </div>

                        </div>
                      
                    </div>
                </div>
  );
}

