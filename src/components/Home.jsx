import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import styles from './Wallet.module.css'
//import ReactDOM from 'react-dom/client';
import logo from  "../images/logo.png"
import hm from '../images/home.png';

const Home = () => {
  return (
    <div className={styles.header}>
		 <body>
                    <nav >
                    <a href="/"><img src={logo} /></a>
                    
                        <div  className={styles.navlinks}>
                        <ul>
                          <li><a href="/">HOME</a></li>
                          <li><a href="/wallet">WALLET</a></li>
                          <li><a href="/about">ABOUT</a></li>
                        </ul>
                        </div>
                    </nav>
            </body>
        <div className={styles.home}>          
          
          <img src={hm}/>
          <a href="/wallet" class={styles.button1}>Connect Wallet</a>
          </div>
        
    </div>
    )
};

export default Home;
