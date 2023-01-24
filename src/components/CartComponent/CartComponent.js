import React from 'react'
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseCount } from '../../features/cart/cartSlice';
import "./CartComponent.scss"
import { AiOutlineDelete } from "react-icons/ai";
import { convertPrice } from "../../utils/helpers";

export default function BooksContent({ item }) {

  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
      dispatch(removeFromCart(productId));
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
  const handleDecreaseCount = (productId) => {
    dispatch(decreaseCount(productId));
  }


  return (
    <div>
      
         <div className="row g-0 mb-3">
            <div className="col-md-4">
              
              <img src={item.image} className="img-fluid rounded-start" alt={item.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center name">
          
                      <h5 className="card-title  bookName ">{item.name}</h5>

                      <p className="card-text bin"><i className ="uil uil-trash" onClick={() => handleRemoveFromCart(item.id)}></i></p>

                </div>
                {/* <p className="card-text text">Author: {item.author}</p> */}
                {/* <p className="card-text text">Genre: {item.genre}</p> */}
                {/* <p className="card-text text">Published Date: {FormatDate(item.published_date)}</p> */}
                <p className="card-text text">Price: Rs. {convertPrice(item.price)}</p>
                <p className="card-text text">
                Quantity:
                  <button className="button" onClick={() => handleAddToCart(item)}>+</button>
                   {item.cartQuantity}
                  <button className="button" onClick={() => handleDecreaseCount(item.id)}>-</button>
                </p>
                
              </div>
            </div>
          </div>
          <div>
            
          </div>
      
    </div>
 


  );
}

