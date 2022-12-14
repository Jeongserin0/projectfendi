import React from "react";
import styled from "styled-components";
import styles from './new.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Link } from 'react-router-dom';
import Listpage from './listpage';

const NewBox = styled.div`
    width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const NewBox2 = styled.div`
    width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const NewBox3 = styled.div`
    width: 100%; height: 500px;
    background-color: white;
    margin-top: 50px;
`;

const NewArrival = styled.div`
    width: 340px; height: 500px;
    display: inline-block;
    background-color: white;
    cursor: pointer;
`;

function Newitem({item}){
    return(
        <NewArrival>
            <Link to="/components/listpage" style={{textDecoration:'none'}}>
            <img src={item.src} alt={item.maintitle}/>
            <h3 className={styles.MainT}>{item.maintitle}</h3>
            <p className={styles.MainP}>{item.price}</p>
            </Link>
            <div>
                <Route path="/components/listpage" component={Listpage}/>
            </div>
        </NewArrival>
    );
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",
                width: "60px", height: "200px",
                zIndex:"9999", marginRight: "50px",
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
                marginLeft: "50px", marginTop: "-15px",
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

function Newlist(){
    const items = [
        {
            id: 1,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new1.jpg',
            maintitle: '????????? ?????? ???????????? ??????',
            price: '??? 3,150,000'
        },
        {
            id: 2,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new2.jpg',
            maintitle: '????????? ?????? ???????????? ??????',
            price: '??? 1,350,000'
        },
        {
            id: 3,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new3.jpg',
            maintitle: '?????? ??????????????? ?????? ???',
            price: '??? 4,200,000'
        },
        {
            id: 4,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new4.jpg',
            maintitle: '?????? ???????????????',
            price: '??? 1,600,000'
        },
        {
            id: 5,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new5.jpg',
            maintitle: '?????? ?????? ?????? Fendace ????????? ???',
            price: '??? 4,500,000'
        },
        {
            id: 6,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new6.jpg',
            maintitle: 'Fendace ?????? ?????? ????????? ??????',
            price: '??? 3,150,000'
        },
        {
            id: 7,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new7.jpg',
            maintitle: 'Fendace ?????? ?????? ?????? ??????',
            price: '??? 4,100,000'
        },
        {
            id: 8,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new8.jpg',
            maintitle: '?????? ?????? ????????? Fendace ?????????',
            price: '??? 2,300,000'
        },
        {
            id: 9,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new9.jpg',
            maintitle: '????????? ?????? ?????? ????????? ??????',
            price: '??? 2,500,000'
        },
        {
            id: 10,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new10.jpg',
            maintitle: '?????? ????????? ?????? ?????????',
            price: '??? 999,000'
        },
        {
            id: 11,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new11.jpg',
            maintitle: '???????????? ?????? ????????? ?????????',
            price: '??? 2,850,000'
        },
        {
            id: 12,
            src: 'https://Jeongserin0.github.io/projectfendi/images/new12.jpg',
            maintitle: '????????? ?????? ?????? ?????? ???',
            price: '??? 760,000'
        }
    ];
    return(
       <div>
        <Slider {...settings}>
            <NewBox>
                <div className={styles.FlexBox}>
                <Newitem item={items[0]}/>
                <Newitem item={items[1]}/>
                <Newitem item={items[2]}/>
                <Newitem item={items[3]}/>
                </div>
            </NewBox>
            <NewBox2>
                <div className={styles.FlexBox}>
                <Newitem item={items[4]}/>
                <Newitem item={items[5]}/>
                <Newitem item={items[6]}/>
                <Newitem item={items[7]}/>
                </div>
            </NewBox2>
            <NewBox3>
                <div className={styles.FlexBox}>
                <Newitem item={items[8]}/>
                <Newitem item={items[9]}/>
                <Newitem item={items[10]}/>
                <Newitem item={items[11]}/>
                </div>
            </NewBox3>
         </Slider>
            </div>
    );
};

export default Newlist;