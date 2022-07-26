import {useState, useEffect} from 'react'
import Book from './Book';
import * as bookAPI from './BooksAPI'

const SearchBooks = ({currentlyReadingBooks, wantsToReadBooks, readBooks, updateBooksLibrary})=> {

  const [query, setquery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect (() => {
      const search = async () => {
          const res = await bookAPI.search(query,10);
          setSearchResults(res);
          console.log(res)
        }
        search();
  }, [query])


  let currentShelf;

  const doesItExistsInCurrentlyReadingBooks = (searchedBook) => {
    currentlyReadingBooks.forEach((currentlyReadingBook)=> {
      if (searchedBook.id === currentlyReadingBook.id){
          currentShelf = 'currentlyReadingBooks';  
      }else{currentShelf = undefined}
    })
  }

  const doesItExistsInWantsToReadBooks = (searchedBook) => {
    wantsToReadBooks.forEach((wantsToReadBook)=> {
      if (searchedBook.id === wantsToReadBook.id){
          currentShelf = 'wantsToReadBooks';
      }
    })
  }

  const doesItExistsInReadBooks = (searchedBook) => {
    readBooks.forEach((readBook)=> {
      if (searchedBook.id === readBook.id){
          currentShelf = 'readBooks';
      }
    })
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
        >
          Close
        </a>
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
              return(
                <li key={book.id}>
                  <Book title={book.title}
                        authors={book.authors} 
                        coverImage={book.imageLinks ? book.imageLinks.smallThumbnail : undefined}
                        id={book.id}
                        currentShelf={currentShelf}
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
