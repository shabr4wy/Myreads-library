import {useState, useEffect} from 'react'
import Book from './Book';
import * as bookAPI from './BooksAPI'

const SearchBooks = ({updateBooksLibrary})=> {

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
                searchResults && searchResults.map((book)=> (
                    <li key={book.id}>
                        <Book previewLink={book.imageLinks.smallThumbnail}
                              title={book.title}
                              authors={book.authors}  
                              updateBooksLibrary={updateBooksLibrary}   
                        />
                    </li>
                ))
            }
          </ol>
          </div>
        </div>
    ) 
    
}

export default SearchBooks;
