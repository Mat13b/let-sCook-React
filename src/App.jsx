import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBAR from "./TopNav/NavBar";
import DisplayBody from "./Body/DisplayBody";
import DisplayFooter from './Footer/DisplayFooter';
import SearchBar from './SearchBar/SearchBar';

function App() {

  return (
    <>
     <NavBAR />
     <SearchBar />
     <DisplayBody />
     <DisplayFooter />
    </>
  );
}

export default App;