import {useState, useEffect} from 'react'
import Book from './Book';
import * as bookAPI from './BooksAPI'
import { Link } from 'react-router-dom';

const SearchBooks = ({booksFromServer, updateBooksLibrary})=> {

  const [query, setquery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // search the query
  useEffect(() => {
    if (query) {
      const search = async () => {
        const res = await bookAPI.search(query, 10);
        setSearchResults(res);
      }
      search();
    }else {setSearchResults([])}
  }, [query]);


  const checkIfSearchedBookExistsOnTheMainPage = (searchedBook) => {
    booksFromServer.forEach((book) => {
      if (searchedBook.id === book.id){
        searchedBook.shelf = book.shelf;
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
            !searchResults.error ? searchResults.map((book)=> {
              checkIfSearchedBookExistsOnTheMainPage(book)
              return(
                <li key={book.id}>
                  <Book book={book}
                        updateBooksLibrary={updateBooksLibrary}
                  />
                </li>
              )
            }) : <p> not found </p>
        }
      </ol>
      </div>
    </div>
  ) 
  
}

export default SearchBooks;
