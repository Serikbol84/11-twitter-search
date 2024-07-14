import React, { useState } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import SearchMenu from './components/SearchComponent';
import SideMenu from './components/SideMenuComponent';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className="vertical-divider"></div>
      <Home searchQuery={searchQuery}/>
      <div className="vertical-divider"></div>
      <SearchMenu onSearch={handleSearch}/>
    </div>
  );
}

export default App;
