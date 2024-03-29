import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import Footer from './components/utiles/Footer';
import Header from './components/utiles/Header';

export default function App() {

  return (
    <div className="App">
      <Header className="header"/>
      <Routes/>
      <Footer className="footer"/>
    </div>
);
  }
