import React from "react";
import styled from "styled-components";
import styles from './newspage.module.css';

const Magazinebox = styled.div`
    width: 1330px; height: 560px;
    margin: 0 auto;
    background-color: white;
    display: flex; justify-content: space-between;
`;

const Magazinebox2 = styled.div`
    width: 1330px; height: 560px;
    margin: 0 auto;
    margin-top: 60px;
    background-color: white;
    display: flex; justify-content: space-between;
`;

const Magazinebox3 = styled.div`
    width: 1330px; height: 560px;
    margin: 0 auto;
    margin-top: 60px;
    background-color: white;
    display: flex; justify-content: space-between;
`;

const Magazines = styled.div`
    width: 420px; height: 560px;
    display: inline-block;
    background-color: white;
    box-shadow: 7px 7px 7px rgb(235, 235, 235);
`;

const Magazinetxt = styled.div`
    width: 420px; height: 140px;
    background-color: white;
    margin-top: -5px;
    position: absolute;
    text-align: center;
`;

function Magazineitem({item}){
    return(
        <Magazines>
            <img src={item.src} alt={item.maintitle}/>
            <Magazinetxt>
                <h3 className={styles.magah3}>{item.maintitle}</h3>
                <p className={styles.magap}>{item.text}</p>
                <span className={styles.magaspan}>자세히보기</span>
            </Magazinetxt>
        </Magazines>
    );
}

function Newsmagazine(){
    const items = [
        {
            id: 1,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news1.jpg',
            maintitle: '디지털 프론트 로우',
            text: '배우 이동욱, 아시아 대표로 디지털 프론트 로우 참여'
        },
        {
            id: 2,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news2.jpg',
            maintitle: '썸머 버티고 컬렉션 캠페인',
            text: '사라 콜만과의 협업, 버티고 컬렉션 캠페인 화보 공개'
        },
        {
            id: 3,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news3.jpg',
            maintitle: '캘리포니아 스카이 컬렉션 출시',
            text: '캘리포니아 스카이 컬렉션 출시기념 보그 화보 공개'
        },
        {
            id: 4,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news4.jpg',
            maintitle: '새 컬렉션 롯데백화점 런칭',
            text: '펜디, 전세계 최초로 새 컬렉션 롯데백화점 런칭'
        },
        {
            id: 5,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news5.jpg',
            maintitle: '첫 공식 온라인 스토어 오픈',
            text: '펜디, 한국 첫 공식 온라인 스토어 정식 오픈'
        },
        {
            id: 6,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news6.jpg',
            maintitle: '지코, 펜디의 새로운 앰버서더',
            text: 'MZ세대의 아이콘, 펜디의 새로운 앰버서더로 선정'
        },
        {
            id: 7,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news7.jpg',
            maintitle: 'Fendace 컬렉션 출시',
            text: '베르사체와 펜디, 세기의 만남으로 완성된 컬렉션'
        },
        {
            id: 8,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news8.jpg',
            maintitle: 'FENDI x SKIMS 컬렉션',
            text: '펜디와 스킴스, 현대 여성을 위한 캡슐 컬렉션'
        },
        {
            id: 9,
            src: 'https://Jeongserin0.github.io/projectfendi/images/news9.jpg',
            maintitle: '서울 피카부 프로젝트',
            text: '펜디의 피카부 프로젝트 서울 상륙'
        },
    ]
    return(
        <div>
        <Magazinebox>
            <Magazineitem item={items[0]}/>
            <Magazineitem item={items[1]}/>
            <Magazineitem item={items[2]}/>
        </Magazinebox>

        <Magazinebox2>
            <Magazineitem item={items[3]}/>
            <Magazineitem item={items[4]}/>
            <Magazineitem item={items[5]}/>
        </Magazinebox2>

        <Magazinebox3>
            <Magazineitem item={items[6]}/>
            <Magazineitem item={items[7]}/>
            <Magazineitem item={items[8]}/>
        </Magazinebox3>
        </div>
    );
}

export default Newsmagazine;