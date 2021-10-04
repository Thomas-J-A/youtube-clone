import React from 'react';
import Nav from './components/nav/Nav';
import CurrentVideo from './components/current-video/CurrentVideo';
import Sidebar from './components/sidebar/Sidebar';
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <Nav />
    <div className='main-container'>
      <CurrentVideo />
      <Sidebar />
      <Comments />
    </div>
  </>
);

export default App;
