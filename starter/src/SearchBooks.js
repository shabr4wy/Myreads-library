import {useState, useEffect} from 'react'
import Book from './Book';
import * as bookAPI from './BooksAPI'
import { Link } from 'react-router-dom';

const SearchBooks = ({currentlyReadingBooks, wantsToReadBooks, readBooks, updateBooksLibrary})=> {

  const [query, setquery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      const search = async () => {
        const res = await bookAPI.search(query, 10);
        setSearchResults(res);
      }
      search();
    }else {setSearchResults([])}
  }, [query]);

  let shelf; 

  const doesItExistsInCurrentlyReadingBooks = (searchedBook) => {
    currentlyReadingBooks.forEach((currentlyReadingBook)=> {
      if (searchedBook.id === currentlyReadingBook.id){
          shelf = 'currentlyReading';  
      }else{shelf = undefined}
    })
  }

  const doesItExistsInWantsToReadBooks = (searchedBook) => {
    wantsToReadBooks.forEach((wantsToReadBook)=> {
      if (searchedBook.id === wantsToReadBook.id){
          shelf = 'wantToRead';
      }
    })
  }

  const doesItExistsInReadBooks = (searchedBook) => {
    readBooks.forEach((readBook)=> {
      if (searchedBook.id === readBook.id){
          shelf = 'read';
      }
    })
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
      <ol className="books-grid">
        {
            searchResults && searchResults.map((book)=> {
              doesItExistsInCurrentlyReadingBooks(book);
              doesItExistsInWantsToReadBooks(book);
              doesItExistsInReadBooks(book);
              book.shelf = shelf;
              return(
                <li key={book.id}>
                  <Book book={book}
                        updateBooksLibrary={updateBooksLibrary}
                  />
                </li>
              )
            })
        }
      </ol>
      </div>
    </div>
  ) 
  
}

export default SearchBooks;
