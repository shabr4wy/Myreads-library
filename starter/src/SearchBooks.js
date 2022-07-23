import {useState} from 'react'

const SearchBooks = ()=> {

    const [query, setquery] = useState('');
    
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
            <ol className="books-grid"></ol>
          </div>
        </div>
    ) 
    
}

export default SearchBooks;