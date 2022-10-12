import React from "react";
import styled from "styled-components";
import styles from './listpage.module.css';

const Productbox = styled.div`
    width: 1400px; height: 500px;
    background-color: white;
    margin: 0 auto;
    padding-top: 60px;
    display: flex; justify-content: space-between;
`;

const Productbox2 = styled.div`
    width: 1400px; height: 500px;
    background-color: white;
    margin: 0 auto;
    padding-top: 60px;
    display: flex; justify-content: space-between;
`;

const Productbox3 = styled.div`
    width: 1400px; height: 500px;
    background-color: white;
    margin: 0 auto;
    padding-top: 60px;
    display: flex; justify-content: space-between;
`;

const Productbox4 = styled.div`
    width: 1400px; height: 500px;
    background-color: white;
    margin: 0 auto;
    padding-top: 60px;
    display: flex; justify-content: space-between;
`;

const Productbox5 = styled.div`
    width: 1400px; height: 500px;
    background-color: white;
    margin: 0 auto;
    padding-top: 60px;
    display: flex; justify-content: space-between;
`;

const ProductArrival = styled.div`
    width: 340px; height: 500px;
    display: inline-block;
    background-color: white;
    cursor: pointer;
    border: 1px solid rgb(210, 210, 210);
`;

function Productitem({item}){
    return(
        <ProductArrival>
            <img src={item.src} alt={item.maintitle}/>
            <h3 className={styles.listTitle}>{item.maintitle}</h3>
            <p className={styles.listPrice}>{item.price}</p>
        </ProductArrival>
    );
}


function ProductNew(){
    const items = [
        {
            id: 1,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew1.jpg',
            maintitle: '라이트 블루 샴브레이 재킷',
            price: '￦ 3,150,000'
        },
        {
            id: 2,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew2.jpg',
            maintitle: '라이트 블루 샴브레이 쇼츠',
            price: '￦ 1,350,000'
        },
        {
            id: 3,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew3.jpg',
            maintitle: '골드 라미네이트 가죽 백',
            price: '￦ 4,200,000'
        },
        {
            id: 4,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew4.jpg',
            maintitle: '나노 펜디그라피',
            price: '￦ 1,600,000'
        },
        {
            id: 5,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew7.jpg',
            maintitle: '라이트 블루 밍크 하이힐 샌들',
            price: '￦ 2,500,000'
        },
        {
            id: 6,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew8.jpg',
            maintitle: '멀티 컬러의 저지 티셔츠',
            price: '￦ 999,000'
        },
        {
            id: 7,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew9.jpg',
            maintitle: '몬트레조 핑크 양가죽 미니백',
            price: '￦ 2,850,000'
        },
        {
            id: 8,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew10.jpg',
            maintitle: '라이트 블루 데님 버킷 햇',
            price: '￦ 760,000'
        },
        {
            id: 9,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew13.jpg',
            maintitle: '펜디그래피 헤어 클립',
            price: '￦ 790,000'
        },
        {
            id: 10,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew14.jpg',
            maintitle: '바게트 브레이슬릿',
            price: '￦ 740,000'
        },
        {
            id: 11,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew15.jpg',
            maintitle: '펜디 필 화이트 가죽 슬라이드',
            price: '￦ 1,290,000'
        },
        {
            id: 12,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew16.jpg',
            maintitle: '베이지 라피아 햇',
            price: '￦ 850,000'
        }
    ];

    const itemsT = [
        {
            id: 1,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew5.jpg',
            maintitle: '퀼트 블랙 실크 Fendace 바게트 백',
            price: '￦ 4,500,000'
        },
        {
            id: 2,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew6.jpg',
            maintitle: 'Fendace 블랙 가죽 하이힐 샌들',
            price: '￦ 3,150,000'
        },
        {
            id: 3,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew11.jpg',
            maintitle: '바게트 체인 미디 라일락 가죽 백',
            price: '￦ 3,900,000'
        },
        {
            id: 4,
            src: 'https://Jeongserin0.github.io/projectfendi/images/pdnew12.jpg',
            maintitle: '바게트 레드 FF 나파 가죽 백',
            price: '￦ 3,000,000'
        }
    ];

    return(
        <div>
            <Productbox>
                <Productitem item={items[0]}/>
                <Productitem item={items[1]}/>
                <Productitem item={items[2]}/>
                <Productitem item={items[3]}/>
            </Productbox>

            <Productbox2>
                <Productitem item={itemsT[0]}/>
                <Productitem item={itemsT[1]}/>
                <div className={styles.itemphoto}>
                    {/* <img src={require('./images/pdphoto1.jpg')}/> */}
                </div>
            </Productbox2>

            <Productbox3>
                <Productitem item={items[4]}/>
                <Productitem item={items[5]}/>
                <Productitem item={items[6]}/>
                <Productitem item={items[7]}/>
            </Productbox3>

            <Productbox4>
                <div className={styles.itemphoto2}>
                    {/* <img src={require('./images/pdphoto1.jpg')}/> */}
                </div>
                <Productitem item={itemsT[2]}/>
                <Productitem item={itemsT[3]}/>
            </Productbox4>

            <Productbox5>
                <Productitem item={items[8]}/>
                <Productitem item={items[9]}/>
                <Productitem item={items[10]}/>
                <Productitem item={items[11]}/>
            </Productbox5>
        </div>
    );
}

export default ProductNew;