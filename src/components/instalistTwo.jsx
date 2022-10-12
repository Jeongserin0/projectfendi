import React from "react";
import styled from "styled-components";
import styles from './instagram.module.css';

const Instabox = styled.div`
    width: 1240px; height: 240px;
    background-color: white;
    margin: 0 auto;
    margin-top: 10px;
    display: flex; justify-content: space-between;
`;

const Insta = styled.div`
    width: 240px; height: 240px;
    border-radius: 10px;
    background-color: white;
`;

function Instaitem({item}){
    return(
            <Insta>
                <img src={item.src} alt={item.maintitle} className={styles.instaP}/>
            </Insta>
    );
}


function InstalistTwo(){
    const items = [
        {
            id: 6,
            src: 'https://Jeongserin0.github.io/projectfendi/images/insta6.jpg',
            maintitle: 'instagram'
        },
        {
            id: 7,
            src: 'https://Jeongserin0.github.io/projectfendi/images/insta7.jpg',
            maintitle: 'instagram'
        },
        {
            id: 8,
            src: 'https://Jeongserin0.github.io/projectfendi/images/insta8.jpg',
            maintitle: 'instagram'
        },
        {
            id: 9,
            src: 'https://Jeongserin0.github.io/projectfendi/images/insta9.jpg',
            maintitle: 'instagram'
        },
        {
            id: 10,
            src: 'https://Jeongserin0.github.io/projectfendi/images/insta10.jpg',
            maintitle: 'instagram'
        },
    ];
    return(
            <Instabox>
                <a target="_blank" href="https://www.instagram.com/"><Instaitem item={items[0]}/></a>
                <a target="_blank" href="https://www.instagram.com/"><Instaitem item={items[1]}/></a>
                <a target="_blank" href="https://www.instagram.com/"><Instaitem item={items[2]}/></a>
                <a target="_blank" href="https://www.instagram.com/"><Instaitem item={items[3]}/></a>
                <a target="_blank" href="https://www.instagram.com/"><Instaitem item={items[4]}/></a>
            </Instabox>
    );
}

export default InstalistTwo;