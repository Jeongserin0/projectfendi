import React from "react";
import styles from './news.module.css';
import { Route, Link } from 'react-router-dom';
import Newspage from './newspage';

function News(){
    return(
        <div className={styles.news}>
                <h2>NEWS</h2>
                <div className={styles.newsBox}>
                    <div className={styles.newsCard}>
                        <div className={styles.card}>
                            <div className={styles.cardPhoto}>
                                <img src={require('./images/news1.jpg')}/>
                            </div>
                            <div className={styles.cardTxt}>
                                <h3>디지털 프론트 로우</h3>
                                <p>배우 이동욱, 아시아 대표로 디지털 프론트 로우 참여</p>
                                <Link to="/components/newspage" style={{textDecoration:'none'}}>
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardPhoto}>
                                <img src={require('./images/news2.jpg')}/>
                            </div>
                            <div className={styles.cardTxt}>
                                <h3>썸머 버티고 컬렉션 캠페인</h3>
                                <p>사라 콜만과의 협업, 버티고 컬렉션 캠페인 화보 공개</p>
                                <Link to="/components/newspage" style={{textDecoration:'none'}}>
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardPhoto}>
                                <img src={require('./images/news3.jpg')}/>
                            </div>
                            <div className={styles.cardTxt}>
                                <h3>캘리포니아 스카이 컬렉션 출시</h3>
                                <p>캘리포니아 스카이 컬렉션 출시기념 보그 화보 공개</p>
                                <Link to="/components/newspage" style={{textDecoration:'none'}}>
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Route path="/components/newspage" component={Newspage}/>
                </div>
            </div>
    );
}

export default News;