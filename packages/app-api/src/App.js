import React from 'react';
import {hot} from 'react-hot-loader/root';
// import 'antd/dist/antd.css';
// import './app.scss';
import styles from './app.scss';
import smile from './assets/images/smile.png'

function App() {

    const _onClick = ()=>{
        console.log('style: ', styles)
        // styles.app.fontSize = '10px'
    }

    return (
        <div className={styles.app} onClick={_onClick}>
            hello react
            <img src={smile} alt='smile'/>
        </div>
    )
}

export default hot(App);