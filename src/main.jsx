import React from "react";
// import styled from 'styled-components';
// import styles from './main.module.css';
import Footer from './footer';
import New from './components/new';
import Collection from "./components/collection";
import Best from "./components/best";
import Category from "./components/category";
import News from "./components/news";
import Instagram from "./components/instagram";
import MainImg from "./mainimg";
// import styled from "styled-components";
import styles from './main.module.css';

// const MainImg = styled.div`
//   width:100%; height:100vh;
//   background-image: src={require('./images/main.jpg')};
//   background-repeat: no-repeat;
//   background-size: cover;
//   z-index: -999;
// `

function MainCom(){
    return(
        <div className={styles.wrap}>
            <MainImg/>

            <New/>
            <Collection/>
            <Best/>
            <Category/>
            <News/>
            <Instagram/>
            
            <Footer/>
        </div>
    );
}

export default MainCom;