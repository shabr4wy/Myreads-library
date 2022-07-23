import Book from "./Book";

const CurrentlyReading = ({currentlyReadingBooks}) => {
    
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        currentlyReadingBooks.map((book)=> (
                            <li key="{book.title}" >
                                <Book previewLink={book.previewLink}
                                      title={book.title}
                                      authors={book.authors}     
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