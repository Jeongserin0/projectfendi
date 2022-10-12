import React from "react";
import Footer from "../footer";
import Newscollection from './newscollection';
import Newsmagazine from './newsmagazine';
import styles from './newspage.module.css';

function Newspage(){
    return(
        <div className={styles.NewsPage}>
            <div className={styles.NewsMain}>
                <div className={styles.NewsTxt}>
                    <h1>NEWS</h1>
                    <div className={styles.NewsLine}></div>
                    <p>오직 펜디만이 보여줄 수 있는 여름, <br/>
                       땅, 바다, 하늘에서 영감을 얻은 컬러를 통한 새로운 컬렉션과 펜디의 새로운 NEWS를 확인하세요.</p>
                </div>

                <div className={styles.NewsPhoto}>
                    <div className={styles.NewsPT1}>
                        <div className={styles.Photo1}>
                            <div className={styles.season1}>
                               <div className={styles.Opacity}>
                                    <h4>2023 S/S Jewelry_</h4>
                               </div>
                            </div>
                            <div className={styles.season2}>
                                <div className={styles.Opacity2}>
                                    <h4>2023 S/S WOMEN<br/>Ready to Wear_</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Photo2}>
                            <div className={styles.Opacity3}>
                                <h3>2023 S/S MAN <br/>Ready to Wear_</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.NewsPT2}>
                        <div className={styles.Opacity4}>
                            <h2>FENDACE<br/>COLLECTION_</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Newscollection/>

            <div className={styles.CollLine}>
                <div className={styles.collLine}></div>
            </div>

            <div className={styles.magazine}>
                <Newsmagazine/>
            </div>

            <Footer/>
        </div>
    );
}

export default Newspage;