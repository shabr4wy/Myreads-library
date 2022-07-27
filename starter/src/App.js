import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';


function App(){

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantsToReadBooks, setWantsToReadBooks] = useState([]);
  const [readBooks, setReadBokks] = useState([]);

  useEffect (()=> {
    const getAll = async ()=> {
      const res = await BooksAPI.getAll();
      console.log(res)
    }
    getAll();
  }, [])

  const updateBooksLibrary = (currentShelf, selectedShelf, book) => {

    removeBookFromPreviousSection(currentShelf, book)

    if (selectedShelf === 'currentlyReadingBooks'){
      setCurrentlyReadingBooks([...currentlyReadingBooks, book]);
    } else if (selectedShelf === 'wantsToReadBooks'){
      setWantsToReadBooks([...wantsToReadBooks, book]);
    }else if (selectedShelf === 'readBooks'){
      setReadBokks([...readBooks, book]);
    }
  }

  const removeBookFromPreviousSection = (currentShelf, book) => {
    if (currentShelf === 'currentlyReadingBooks'){
      const updatedCurrentlyReadingBooks = currentlyReadingBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setCurrentlyReadingBooks(updatedCurrentlyReadingBooks);
    }else if (currentShelf === 'wantsToReadBooks'){
      const updatedWantsToReadBooks = wantsToReadBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setWantsToReadBooks(updatedWantsToReadBooks);
    }else if (currentShelf === 'readBooks'){
      const updatedReadBooks = readBooks.filter((bookInPreviousSection) => (
        bookInPreviousSection.id !== book.id
      ))
      setReadBokks(updatedReadBooks);
    }
  }


  return (
    <div>
      <BooksLibrary currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks} updateBooksLibrary={updateBooksLibrary}/>
      {/* <SearchBooks updateBooksLibrary={updateBooksLibrary} currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks}/> */}
    </div>
  )
}
export default App;
