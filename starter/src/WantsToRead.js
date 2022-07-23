import Book from "./Book";

const WantsToRead = ({wantsToReadBooks}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Wants To Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                    {
                        wantsToReadBooks.map((book)=> (
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

export default WantsToRead;