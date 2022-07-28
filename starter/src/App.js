import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
||||||| 7b22da4
import { useState } from "react";
=======
import { useState, useEffect } from "react";
import * as bookAPI from './BooksAPI';

>>>>>>> d36ea7e90c4f6aed3a36e681752e5fa172b4a326


function App(){

<<<<<<< HEAD
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
||||||| 7b22da4
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([
    {
      title: 'Pro React',
      authors: ['Harper lee'],
      coverImage: 'http://books.google.com/books/content?id=PKpPCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'currentlyReadingBooks',
      id: "PKpPCwAAQBAJ"
    }
  ]);

  const [wantsToReadBooks, setWantsToReadBooks] = useState([
    {
      title: "Robotics",
      authors: ["George A. Bekey"],
      coverImage: 'http://books.google.com/books/content?id=7n2gw9MbTMUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'wantsToReadBooks',
      id: "7n2gw9MbTMUC",
    },
  ]);

  const [readBooks, setReadBokks] = useState([
    {
      title: "Learning Virtual Reality",
      authors: ["Tony Parisi"],
      coverImage: 'http://books.google.com/books/content?id=tXrPCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'readBooks',
      id: "tXrPCgAAQBAJ",
=======
  
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([
    {
      title: 'Pro React',
      authors: ['Harper lee'],
      coverImage: 'http://books.google.com/books/content?id=PKpPCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'currentlyReadingBooks',
      id: "PKpPCwAAQBAJ"
    }
  ]);
  
  const [wantsToReadBooks, setWantsToReadBooks] = useState([
    {
      title: "Robotics",
      authors: ["George A. Bekey"],
      coverImage: 'http://books.google.com/books/content?id=7n2gw9MbTMUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'wantsToReadBooks',
      id: "7n2gw9MbTMUC",
    },
  ]);
  
  const [readBooks, setReadBokks] = useState([
    {
      title: "Learning Virtual Reality",
      authors: ["Tony Parisi"],
      coverImage: 'http://books.google.com/books/content?id=tXrPCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'readBooks',
      id: "tXrPCgAAQBAJ",
>>>>>>> d36ea7e90c4f6aed3a36e681752e5fa172b4a326
    }
    getAll();
  }, [])

  const updateBooksLibrary = (shelf, selectedShelf, book) => {

<<<<<<< HEAD
    BooksAPI.update(book , selectedShelf)
||||||| 7b22da4
  const updateBooksLibrary = (currentShelf, selectedShelf, book) => {
=======
  useEffect (() => {
    const getAll = async () => {
      const res = bookAPI.getAll();
      console.log(res)
    }
    getAll();
  })

  const updateBooksLibrary = (currentShelf, selectedShelf, book) => {
>>>>>>> d36ea7e90c4f6aed3a36e681752e5fa172b4a326

<<<<<<< HEAD
    removeBookFromPreviousSection(shelf, book)
||||||| 7b22da4
    removeBookFromPreviousSection(currentShelf, book)
=======
    bookAPI.update(book, 'currentlyReadingBooks');

    removeBookFromPreviousSection(currentShelf, book)
>>>>>>> d36ea7e90c4f6aed3a36e681752e5fa172b4a326

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

<<<<<<< HEAD
  const removeBookFromPreviousSection = (shelf, book) => {
    if (shelf === 'currentlyReading'){
||||||| 7b22da4
  const removeBookFromPreviousSection = (currentShelf, book) => {
    if (currentShelf === 'currentlyReadingBooks'){
=======

  const removeBookFromPreviousSection = (currentShelf, book) => {
    if (currentShelf === 'currentlyReadingBooks'){
>>>>>>> d36ea7e90c4f6aed3a36e681752e5fa172b4a326
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
      <BooksLibrary currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks} updateBooksLibrary={updateBooksLibrary}/>
      {/* <SearchBooks updateBooksLibrary={updateBooksLibrary} currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks}/> */}
    </div>
  )
}
export default App;
