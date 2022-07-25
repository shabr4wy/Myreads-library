import Book from "./Book";

const CurrentlyReading = ({currentlyReadingBooks, updateBooksLibrary}) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    currentlyReadingBooks.map((book)=> (
                        <li key="{book.title}" >
                            <Book coverImage={book.coverImage}
                                    title={book.title}
                                    authors={book.authors}
                                    currentShelf={book.currentShelf}
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

export default CurrentlyReading;