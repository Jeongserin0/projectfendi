import React from "react";
import styles from './category.module.css';
import { Route, Link } from 'react-router-dom';
import Listpage from './listpage';

function Category(){
    return(
        <div className={styles.category}>
                <div className={styles.cateBox}>
                    <Link to="/components/listpage" style={{textDecoration:'none'}}>
                    <div className={styles.women}>
                        <h1>WOMEN'S EDITION</h1>
                        <p>눈에 띄는 스타일부터 최신 컬렉션을 포함한 신상품과 새롭게 선보이는<br/>아이코닉한 액세서리 에디션을 만나보세요.</p>
                    </div>
                    </Link>
                    <Link to="/components/listpage" style={{textDecoration:'none'}}>
                    <div className={styles.man}>
                        <div className={styles.cateTxt2}>
                        <h1>MEN'S EDITION</h1>
                        <p>신상품, 다가오는 컬렉션 및 머스트 해브 워드로브 에센셜 등<br/>최신 소식을 확인하세요.</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/components/listpage" style={{textDecoration:'none'}}>
                    <div className={styles.gift}>
                        <h1>GIFT IDEA</h1>
                        <p>시그니처 에센셜부터 세련된 액세서리까지<br/>그녀를 위한 완벽한 선물을 찾아보세요.</p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Route path="/components/listpage" component={Listpage}/>
                </div>
            </div>
    );
}

export default Category;