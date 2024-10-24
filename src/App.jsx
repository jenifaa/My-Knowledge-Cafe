
import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);


  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      
      <Header></Header>
     <div className='md:flex'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
