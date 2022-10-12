import React from "react";
import styles from './collection.module.css';
import { Route, Link } from 'react-router-dom';
import Listpage from './listpage';

function Collection(){
    return(
        <div className={styles.collection}>
        <div className={styles.coll1}>
            <div className={styles.collPhoto1}>
                <img src={require('./images/fendace1.jpg')}/>
            </div>
            <div className={styles.collTxt1}>
                <h2>Fendace 컬렉션</h2>
                <p>함께함의 아름다움. 펜디와 베르사체가 각자의 시그니처 코드를 조합하여<br/>
                   독특하면서도 브랜드를 한눈에 알아볼 수 있는 컬렉션을 선보입니다</p>
                   <Link to="/components/listpage" style={{textDecoration:'none'}}><button>자세히보기</button></Link>
            </div>
        </div>
        <div className={styles.coll2}>
            <div className={styles.collPhoto2}>
                <img src={require('./images/fendace2.jpg')}/>
            </div>
            <div className={styles.collTxt2}>
                <h2>피카부 : 본질을 규정하는 아이콘</h2>
                <p>펜디에서 가장 아이코닉한 백이 들려주는<br/>
                   장인정신, 디자인, 유쾌함에 대한 이야기를 담았습니다</p>
                   <Link to="/components/listpage" style={{textDecoration:'none'}}><button>자세히보기</button></Link>
            </div>
        </div>

        <div>
            <Route path="/components/listpage" component={Listpage}/>
        </div>
    </div>
    );
}

export default Collection;