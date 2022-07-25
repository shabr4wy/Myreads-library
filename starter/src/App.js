import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";
import { useState } from "react";


function App(){

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([
    {
      title: 'Pro React',
      authors: ['Harper lee'],
      coverImage: 'http://books.google.com/books/content?id=PKpPCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      currentShelf: 'currentlyReadingBooks',
      id: "PKpPCwAAQBAJ"
    }
  ]);

  const [wantsToReadBooks, setWantsToReadBooks] = useState([
    {
      title: "Pro React",
      authors: ['Cassio de Sousa Antonio'],
      coverImage: 'https://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
      currentShelf: 'wantsToReadBooks'
    },
  ]);

  const [readBooks, setReadBokks] = useState([
    {
      title: 'Oh, the Places You\'ll Go!',
      authors: ['seuss'],
      coverImage: 'https://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
      currentShelf: 'readBooks'
    }
  ]);

  const updateBooksLibrary = (selectedShelf, book) => {
    if (selectedShelf === 'currentlyReadingBooks'){
      setCurrentlyReadingBooks([...currentlyReadingBooks, book]);
    } else if (selectedShelf === 'wantsToReadBooks'){
      setWantsToReadBooks([...wantsToReadBooks, book]);
    }else if (selectedShelf === 'readBooks'){
      setReadBokks([...readBooks, book]);
    }
  }
  
  return (
    <div>
      {/* <BooksLibrary currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks} updateBooksLibrary={updateBooksLibrary}/> */}
      <SearchBooks updateBooksLibrary={updateBooksLibrary} currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks}/>
    </div>
  )
}
export default App;
