import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
import {Route, Routes} from 'react-router-dom'


function App(){

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantsToReadBooks, setWantsToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  let booksFromServer ={
    'currentlyReading' : [],
    'wantToRead' : [],
    'read' : [],
  }; 

  useEffect (()=> {
    const getAll = async ()=> {
      const res = await BooksAPI.getAll();
      
      res.forEach(book => {
        if (book.shelf === 'currentlyReading'){
          booksFromServer.currentlyReading.push(book)
        }
        else if (book.shelf === 'wantToRead'){
          booksFromServer.wantToRead.push(book)
        }
        else if (book.shelf === 'read'){
          booksFromServer.read.push(book)
        }
      });
      setCurrentlyReadingBooks([...booksFromServer.currentlyReading])
      setWantsToReadBooks([...booksFromServer.wantToRead])
      setReadBooks([...booksFromServer.read])
    }
    getAll();
  }, [])

  const updateBooksLibrary = (shelf, selectedShelf, book) => {

    BooksAPI.update(book , selectedShelf)

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
    <Routes>
      <Route exact path="/" element={
        <BooksLibrary currentlyReadingBooks={currentlyReadingBooks}
                      wantsToReadBooks={wantsToReadBooks} 
                      readBooks={readBooks} 
                      updateBooksLibrary={updateBooksLibrary}/>
      }/>
      <Route path="/searchPage" element={
      <SearchBooks updateBooksLibrary={updateBooksLibrary} 
                   currentlyReadingBooks={currentlyReadingBooks} 
                   wantsToReadBooks={wantsToReadBooks} 
                   readBooks={readBooks}/>

      }/>
    </Routes>
  )
}
export default App;
      