import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookList = createAsyncThunk(
  "get/book",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const url = "https://book-set-task.herokuapp.com/api/list_books";
    try {
      const bookList = await axios.get(
        url
      );
      const { data } = bookList;
      return data;
    } catch (error) {
      return error;
    }
  }
);
const setGenreList = (state, action) => {
  let bookList = action.payload
  let tempGenreList = []

  bookList.map(book => {
    if (book.genre.includes('|')) {
      let genres = book.genre.split('|')
      genres.map(genre => {
        tempGenreList.push(genre)

        return genre
      })

    } else {
      tempGenreList.push(book.genre)
    }
    return book
  })
  tempGenreList = new Set(tempGenreList);
  console.log("temp:", tempGenreList);
  state.genreList = Array.from(tempGenreList);
}

const initialState = {
  bookList: [], 
  loading: false,
  genreList: [],
}


const bookListSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchBookList.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBookList.fulfilled]: (state, action) => {
      state.bookList = action.payload;
      setGenreList(state, action)
      console.log(setGenreList)
      state.loading = false;
    },
    [fetchBookList.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const { reducer, actions } = bookListSlice;
export const {} = actions;
export default reducer;

