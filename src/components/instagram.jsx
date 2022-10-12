import React from "react";
import styles from './instagram.module.css';
import Instalist from './instalist';
import InstalistTwo from './instalistTwo';

function Instagram(){
    return(
        <div className={styles.instagram}>
                <h2>INSTAGRAM</h2>
                <Instalist/>
                <InstalistTwo/>
            </div>
    );
}

export default Instagram;