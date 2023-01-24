
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookList} from "../../features/book/bookSlice";
import BooksComponent from "../BookComponent/BookComponent"
import Cart from "../CartList/CartList";
import FilterForm from "../../utils/FilterForm";
import "./BookList.scss"

const BookList = () => {
    const [filterKey, setFilterKey] = useState('')
    const dispatch = useDispatch();
    const state = useSelector(state => state.books);
    console.log(state)
    useEffect(() => {
        dispatch(fetchBookList());
    }, []);
   

 return(
    <div>

       <div className="container-fluid d-lg-grid books">
     
        <div class="row  g-5 justify-content-around">
                <div class="col-sm-8">
                {state.loading ? (
                    <span>Loading.....</span>
                ) : (
                    <div className="container pt-4">

                        {
                        state.genreList.length !== 0 && (
                            <FilterForm genreList={state.genreList} setFilter={setFilterKey} />
                        )
                        }

                        {
                        filterKey !== '' &&
                        <div className="row">
                            {
                            state.bookList.filter(item => item.genre.includes(filterKey)).map(item => (
                                <BooksComponent item={item} key={item.id} />
                            ))
                            }
                        </div>
                        }

                        {
                        filterKey === '' &&
                        <div className="row">
                            {
                            state.bookList.map(item => (
                                <BooksComponent item={item} key={item.id} />
                            ))
                            }
                        </div>
                        }

                    </div>
                    )
                }
                </div>
                <div className ="col-md-4" id="card"> 
                    <div className="position-fixed me-5">
                   
                        <Cart />
                   
                    
                    </div>
                         
               
                
                </div>
            </div>
        </div>
            
            
           
  </div>

 )
  };

export default BookList;