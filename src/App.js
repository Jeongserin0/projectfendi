import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import styles from './header.module.css';
import MainCom from './main';
import Listpage from './components/listpage';
import Newspage from './components/newspage';
// import styled from 'styled-components';

// yarn add react-icons
// yarn add styled-components
// yarn add react-router-dom@5
// yarn add react-slick
// npm install slick-carousel


function App() {
  return (
    <div>
      {/* <div>
        <MainCom/>
      </div> */}

      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to='/'><img src={require('./images/logo.png')}/></Link>
        </div>
        <div className={styles.nav}>
          <ul>
            <li><Link to="/components/listpage" style={{textDecoration:'none'}}>WOMEN</Link></li>
            <li><Link to="/components/listpage" style={{textDecoration:'none'}}>MAN</Link></li>
            <li><Link to="/components/listpage" style={{textDecoration:'none'}}>BAG</Link></li>
            <li><Link to="/components/listpage" style={{textDecoration:'none'}}>JEWELRY</Link></li>
            <li><Link to="/components/listpage" style={{textDecoration:'none'}}>GIFT</Link></li>
            <li><Link to="/components/newspage" style={{textDecoration:'none'}}>NEWS</Link></li>
          </ul>
        </div>
        <div className={styles.user}>
          <div className={styles.my} style={{cursor:"pointer"}}>
            <img src={require('./images/user.png')}/>
          </div>
          <div className={styles.cart} style={{cursor:"pointer"}}>
            <img src={require('./images/cart.png')}/>
          </div>
        </div>
      </div>

      <div>
        <Route path="/" exact={true} component={MainCom}/>
        <Route path="/components/listpage" component={Listpage}/>
        <Route path="/components/newspage" component={Newspage}/>
      </div>

    </div>
  );
}

export default App;
