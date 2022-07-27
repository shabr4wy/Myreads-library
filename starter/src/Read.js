import Book from "./Book";

const Read = ({readBooks, updateBooksLibrary}) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    readBooks.map((book)=> (
                        <li key={book.id} >
                            <Book book={book}
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

export default Read;