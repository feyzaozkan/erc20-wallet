import React from 'react';
import styles from './Wallet.module.css'
import logo from  "../images/logo.png"
import ReactDOM from "react-dom";
import ups from  "../images/ups.jpg"

/*
This project is done for UP School Blockchain Developer graduation project.
With this project,user can show the balance of their ERC-2O token called HMT(Happy Monster Token) and send HMTs to
the other users that their addresses known . 
If you have an any comment/feedback please send an email to me. 
*/


function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`} className={styles.mail}>
      {props.children}
    </a>
  );
}

const About = () => {
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
           <div className={styles.about}>
           This is an graduation project of 
           <a href="https://www.upschool.io/upschool-blockchain-program-solana"> UP School Blockchain Developer Program</a>
          <div>With this project,user can show the balance of their ERC-2O token called HMT(Happy Monster Token) and send HMTs to
          the other users that their addresses are known . </div>
          If you have an any comments/feedbacks please send a  
            <Mailto  email="feyza--ozkan@hotmail.com" subject="Hello" body="Hello world!"> mail </Mailto>
           to me!
           </div>

           


           
    </div>
  );
};

export default About;
