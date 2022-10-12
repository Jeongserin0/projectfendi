import React from "react";
import styles from './best.module.css';
import Bestlist from './bestlist';

function Best(){
    return(
        <div className={styles.best}>
                <div className={styles.bestBox}>
                    <h2>BEST ITEM</h2>
                    <div className={styles.btnL}>
                        <img src={require('./images/left2.png')} alt="left"/>
                    </div>
                    <div className={styles.btnR}>
                        <img src={require('./images/right2.png')} alt="right"/>
                    </div>
                    <Bestlist/>
                </div>
            </div>
    );
}

export default Best;