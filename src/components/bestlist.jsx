import React from "react";
import styled from "styled-components";
import styles from './best.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Link } from 'react-router-dom';
import Listpage from './listpage';

const BestBox = styled.div`
   width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const BestBox2 = styled.div`
    width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const BestBox3 = styled.div`
    width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const BestArrival = styled.div`
    width: 340px; height: 500px;
    display: inline-block;
    background-color: white;
    cursor: pointer;
`;

function Bestitem({item}){
    return(
        <BestArrival>
            <Link to="/components/listpage" style={{textDecoration:'none'}}>
            <img src={item.src} alt={item.maintitle}/>
            <h3 className={styles.BestT}>{item.maintitle}</h3>
            <p className={styles.BestP}>{item.price}</p>
            </Link>
            <div>
                <Route path="/components/listpage" component={Listpage}/>
            </div>
        </BestArrival>
    );
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",
                width: "60px", height: "200px",
                zIndex:"9999", marginRight: "60px",
                marginTop: "-15px", opacity:"0" }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",
                zIndex:"9999", width: "60px", height: "200px",
                marginLeft: "60px", marginTop: "-15px",
                opacity:"0"}}
        onClick={onClick}
      />
    );
  };

  const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1, 
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
  }


function Bestlist(){
    const items = [
        {
            id: 1,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best1.jpg',
            maintitle: '화이트 FF 프린트 패브릭 미니 백',
            price: '￦ 2,500,000'
        },
        {
            id: 2,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best2.jpg',
            maintitle: '바람막이 멀티컬러 나일론 재킷',
            price: '￦ 2,600,000'
        },
        {
            id: 3,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best3.jpg',
            maintitle: '브라운 컬러 나일론 쇼츠',
            price: '￦ 990,000'
        },
        {
            id: 4,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best4.jpg',
            maintitle: '브라운 새틴 샌들',
            price: '￦ 1,150,000'
        },
        {
            id: 5,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best5.jpg',
            maintitle: '나노 바케트 맥시 핸들 골드 가죽 참',
            price: '￦ 1,600,000'
        },
        {
            id: 6,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best6.jpg',
            maintitle: '피카부 I See U 쁘띠 가죽 백',
            price: '￦ 4,700,000'
        },
        {
            id: 7,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best7.jpg',
            maintitle: '블랙 가죽 슬라이드',
            price: '￦ 1,490,000'
        },
        {
            id: 8,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best8.jpg',
            maintitle: '바게트 블랙 가죽 백',
            price: '￦ 3,000,000'
        },
        {
            id: 9,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best9.jpg',
            maintitle: '라일락 가죽 스몰 보스턴 백',
            price: '￦ 2,300,000'
        },
        {
            id: 10,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best10.jpg',
            maintitle: '핑크 비스코스 스웨터',
            price: '￦ 1,600,000'
        },
        {
            id: 11,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best11.jpg',
            maintitle: '화이트 아세테이트 선글라스',
            price: '￦ 660,000'
        },
        {
            id: 12,
            src: 'https://Jeongserin0.github.io/projectfendi/images/best12.jpg',
            maintitle: '브라운 가죽 거싯형 카드 홀더',
            price: '￦ 590,000'
        }
    ];
    return(
        <div>
            <Slider {...settings}>
            <BestBox>
                <div className={styles.FlexBox}>
                <Bestitem item={items[0]}/>
                <Bestitem item={items[1]}/>
                <Bestitem item={items[2]}/>
                <Bestitem item={items[3]}/>
                </div>
            </BestBox>
            <BestBox2>
                <div className={styles.FlexBox}>
                <Bestitem item={items[4]}/>
                <Bestitem item={items[5]}/>
                <Bestitem item={items[6]}/>
                <Bestitem item={items[7]}/>
                </div>
            </BestBox2>
            <BestBox3>
                <div className={styles.FlexBox}>
                <Bestitem item={items[8]}/>
                <Bestitem item={items[9]}/>
                <Bestitem item={items[10]}/>
                <Bestitem item={items[11]}/>
                </div>
            </BestBox3>
            </Slider>
        </div>    
    );
}

export default Bestlist;