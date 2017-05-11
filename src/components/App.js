import React, { Component } from 'react';
import logo from './assets/logo.svg';
import BannerApp from './banner/BannerApp';
import BoardApp from './board/BoardApp';
import {Style} from 'radium';
//Import Global Styles
import './App.css';
import styles from './app-styles.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Style rules={styles}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React plus GSAP</h2>
        </div>
        <p className="App-intro">
          Animating using GSAP, powered by React Library
        </p>
        {/*Lynda BannerApp*/}
        <BannerApp/>
        {/*Pluralsight Application*/}
        <BoardApp/>
      </div>
    );
  }
}

export default App;
