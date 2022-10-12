import React from "react";
import styles from './footer.module.css';


function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.ftNews}>
                    <h1>뉴스레터 구독</h1>
                    <input type="text" placeholder=" 이메일을 입력해주세요"/>
                    <button>전송</button>
                </div>
                <div className={styles.customer}>
                    <ul>
                        <li>고객지원</li>
                        <li><a href="#">부티크 방문 예약</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">주문 및 배송</a></li>
                        <li><a href="#">반품 및 환불</a></li>
                        <li><a href="#">Fendi Services</a></li>
                    </ul>
                </div>
                <div className={styles.company}>
                    <ul>
                        <li>회사소개</li>
                        <li><a href="#">매장안내</a></li>
                        <li><a href="#">채용안내</a></li>
                        <li><a href="#">지속가능성</a></li>
                    </ul>
                </div>
                <div className={styles.cookie}>
                    <ul>
                        <li>개인정보 보호정책</li>
                        <li><a href="#">개인정보 보호정책</a></li>
                        <li><a href="#">쿠키정책</a></li>
                        <li><a href="#">웹사이트 이용약관</a></li>
                        <li><a href="#">행동 강령</a></li>
                    </ul>
                </div>
                <div className={styles.boutique}>
                    <ul>
                        <li>펜디 부티크</li>
                        <li><a href="#">예약하기</a></li>
                        <li><a href="#">매장안내</a></li>
                    </ul>
                </div>
            </div>
            <p>© FENDI - ALL RIGHTS RESERVED - P. IVA 00900421009 LICENZA SIAE N. 3566/I/1417<br/>
                펜디코리아(주)는 본 웹사이트와 관련하여 통신판매업신고(신고번호: 제 2020-서울강남-
                02334호)를 필하였습니다.</p>
        </div>
    );
}

export default Footer;