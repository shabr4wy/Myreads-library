import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
import { useState } from "react";


function App(){

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
    }
  ]);

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
