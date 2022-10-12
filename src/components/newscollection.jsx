import React from "react";
import styles from './newspage.module.css';

function Newscollection(){
    return(
        <div className={styles.Newscoll}>
            <div className={styles.colltxt}>
                <h2>2023 MAN Summer Fashion Show</h2>
                <p>세계 각지의 휴가지로 떠나는 세계 일주 티켓이 도착했습니다.<br/>
                   이번 컬렉션은 땅, 바다, 하늘에서 영감을 받은 자연스러운 컬러를 통해 여름 스타일을 재해석합니다.<br/>
                   클래식한 실루엣을 해체하여 날아갈 듯한 볼륨감을 연출했고, 바스락거리는 텍스처와 부드러운 텍스처에<br/>
                   여행 기념품에서 영감을 받은 액세서리와 주얼리를 결합했습니다.</p>
            </div>
            <div className={styles.collphoto}>
                <div className={styles.collp1}>
                    <img src={require('./images/newsm1.jpg')}/>
                </div>
                <div className={styles.collp2}>
                    <img src={require('./images/newsm2.jpg')}/>
                </div>
                <div className={styles.collp1}>
                    <img src={require('./images/newsm3.jpg')}/>
                </div>
            </div>
        </div>
    );
}

export default Newscollection;