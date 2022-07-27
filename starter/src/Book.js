import { useState } from "react";

const Book = ({coverImage, title, authors, id, currentShelf, updateBooksLibrary}) => {


    const [selectedShelf, setSelectedShelf] = useState('moveTo')
    const hanndleChange = (selectedShelf) => {
        setSelectedShelf(selectedShelf);
        updateBooksLibrary(currentShelf, selectedShelf,{
            title: title,
            authors: authors,
            coverImage: coverImage,
            id: id,
            currentShelf :selectedShelf,
        })
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover">
                    <img src={coverImage}
                         width="128"
                         height="192"
                    />
                </div>
                <div className="book-shelf-changer">
                <select
                        value={currentShelf ? currentShelf : selectedShelf}
                        onChange={e => hanndleChange(e.target.value)}
                    >
                    <option value="moveTo" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReadingBooks">
                    Currently Reading
                    </option>
                    <option value="wantsToReadBooks">Want to Read</option>
                    <option value="readBooks">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">
                {title}
            </div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book;