import React from "react";
import Footer from "../footer";
import Listselect from './listselect';
import styles from './listpage.module.css';
import ProductNew from "./productNew";

function Listpage(){
    return(
        <div className={styles.ListPage}>
            <div className={styles.ListMain}>
                <div className={styles.ListTxt}>
                    <h1>WOMEN</h1>
                    <div className={styles.ListLine}></div>
                    <p>여성성, 현대적인 우아함, 70년대의 화려함에 힘을 실어주는 킴 존스의 컬렉션은<br/>
                       펜디의 아이코닉한 스타일 코드를 새롭게 해석해 긍정적으로 역동적인 미래에 대한 비전을 제시합니다.</p>
                </div>

                <div className={styles.ListPhoto}>
                        <div className={styles.listP1}>
                            <img src={require('./images/listPhoto1.jpg')}/>
                        </div>
                        <div className={styles.listP2}>
                            <img src={require('./images/listPhoto2.jpg')}/>
                        </div>
                        <div className={styles.listP3}>
                            <img src={require('./images/listPhoto3.jpg')}/>
                        </div>
                </div>
            </div>

            <Listselect/>

            <div className={styles.product}>
                <ProductNew/>
            </div>

            <Footer/>
        </div>
    );
}

export default Listpage;