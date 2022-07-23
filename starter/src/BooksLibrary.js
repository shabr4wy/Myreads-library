import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantsToRead from "./WantsToRead";

const BooksLibrary = ({currentlyReadingBooks, wantsToReadBooks, readBooks}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <CurrentlyReading currentlyReadingBooks={currentlyReadingBooks}/>
                <WantsToRead wantsToReadBooks={wantsToReadBooks}/>
                <Read readBooks={readBooks}/>
            </div>
            <div className="open-search">
                <a>Add a book</a>
            </div>
        </div>
    )
}

export default BooksLibrary;