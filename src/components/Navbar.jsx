import styles from './Wallet.module.css'
import logo from  "../images/logo.png"

const Navbar = () => {

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
      </div>
  );
};

export default Navbar;
