import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';


function App(){

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantsToReadBooks, setWantsToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect (()=> {
    const getAll = async ()=> {
      const res = await BooksAPI.getAll();
      console.log(res)
    }
    getAll();
  }, [])

  const updateBooksLibrary = (shelf, selectedShelf, book) => {

    removeBookFromPreviousSection(shelf, book)

    if (selectedShelf === 'currentlyReading'){
      book.shelf = selectedShelf;
      setCurrentlyReadingBooks([...currentlyReadingBooks, book]);
    } else if (selectedShelf === 'wantToRead'){
      book.shelf = selectedShelf;
      setWantsToReadBooks([...wantsToReadBooks, book]);
    }else if (selectedShelf === 'read'){
      book.shelf = selectedShelf;
      setReadBooks([...readBooks, book]);
    }
  }

  const removeBookFromPreviousSection = (shelf, book) => {
    if (shelf === 'currentlyReading'){
      const updatedCurrentlyReadingBooks = currentlyReadingBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setCurrentlyReadingBooks(updatedCurrentlyReadingBooks);
    }else if (shelf === 'wantToRead'){
      const updatedWantsToReadBooks = wantsToReadBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setWantsToReadBooks(updatedWantsToReadBooks);
    }else if (shelf === 'read'){
      const updatedReadBooks = readBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setReadBooks(updatedReadBooks);
    }
  }


  return (
    <div>
      {/* <BooksLibrary currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks} updateBooksLibrary={updateBooksLibrary}/> */}
      <SearchBooks updateBooksLibrary={updateBooksLibrary} currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks}/>
    </div>
  )
}
export default App;
