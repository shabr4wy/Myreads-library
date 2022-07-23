import "./App.css";
import BooksLibrary from "./BooksLibrary";
import SearchBooks from "./SearchBooks";

const currentlyReadingBooks = [
  {
    title: 'To Kill a Mockingbird ',
    authors: ['Harper lee'],
    previewLink: 'https://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
  }
]

const wantsToReadBooks = [
  {
    title: '1776',
    authors: ['David McCullough'],
    previewLink: 'https://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
  }
]

const readBooks = [
  {
    title: 'Oh, the Places You\'ll Go!',
    authors: ['seuss'],
    previewLink: 'https://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
  }
]
function App(){

  return (
    <div>
      <BooksLibrary currentlyReadingBooks={currentlyReadingBooks} wantsToReadBooks={wantsToReadBooks} readBooks={readBooks}/>
    </div>
  )
}
export default App;
