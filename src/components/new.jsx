import React from "react";
import styles from './new.module.css';
import styled from 'styled-components';
import Newlist from './newlist';
// import Newarrival from './newarrival';


function New(){
    return(
            <div className={styles.new}>
                <div className={styles.newBox}>
                    <h2>NEW ARRIVAL</h2>
                    <div className={styles.btnL}>
                        <img src={require('./images/left2.png')} alt="left"/>
                    </div>
                    <div className={styles.btnR}>
                        <img src={require('./images/right2.png')} alt="right"/>
                    </div>
                    <Newlist/>
                </div>
            </div>
    );
}

export default New;