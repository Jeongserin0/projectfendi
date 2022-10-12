import React from "react";
import styled from "styled-components";
import styles from './listpage.module.css';

const Select = styled.select`
background-color: rgba(0, 0, 0, 0);
border: none;
margin-left : 1360px;
margin-top: 50px;
height: 30px;
font-size: 1rem;
font-weight: 900;
`;

const OPTIONS = [
    {value : "new", name : "신상순"},
    {value : "best", name : "인기순"},
    {value : "expensive", name : "높은가격순"},
    {value : "cheap", name : "낮은가격순"},
]

const Selectbox = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return(
        <Select onChange={handleChange}>
            {props.option.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </Select>
    );
};


function Listselect(){
    return(
        <div className={styles.category}>
            <div className={styles.cateline}>
                <div className={styles.catemenu}>
                    <Selectbox option={OPTIONS} defaultValue="new" className={styles.select}></Selectbox>
                </div>
            </div>
        </div>
    );
}

export default Listselect;