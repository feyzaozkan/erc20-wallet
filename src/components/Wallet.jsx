import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import simple_token_abi from '../Contracts/simple_token_abi.json'
import Interactions from '../Contracts/Interactions';
import logo from '../images/logo.png';
import wl from '../images/connectWallet.png';
const Wallet = () => {

	// deploy simple token contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0x4E0F6c9D1B790C57871CD95d1c65Ef4a834F82E9';
	

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallett');

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const [tokenName, setTokenName] = useState("Token");
	const [balance, setBalance] = useState(null);
	const [transferHash, setTransferHash] = useState(null);


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	let bal;
	const updateBalance = async () => {
		//let balanceBigN = await contract.balanceOf(defaultAccount);
		//let balanceNumber = balanceBigN.toNumber();
		//let tokenDecimals = await contract.decimals();
		//let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);
		
		bal = await contract.balanceOf(defaultAccount);
		bal = ethers.utils.formatEther(bal, 18);

		setBalance(toFixed(bal));	
		//setBalance(toFixed(tokenBalance));	
	}

   function toFixed(x) {
   if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
         x *= Math.pow(10, e - 1);
         x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
   } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
         e -= 20;
         x /= Math.pow(10, e);
         x += (new Array(e + 1)).join('0');
      }
   }
   return x;
}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, simple_token_abi, tempSigner);
		setContract(tempContract);	
	}

	useEffect(() => {
		if (contract != null) {
			updateBalance();
			updateTokenName();
		}
	}, [contract]);

	const updateTokenName = async () => {
		setTokenName(await contract.name());
	}
	return (
		
	<div className={styles.header}>
		 <body>
                    <nav >
                    <a href="http://localhost:3000/"><img src={logo} /></a>
                    
                        <div  className={styles.navlinks}>
                        <ul>
                          <li><a href="/">HOME</a></li>
                          <li><a href="/wallet">WALLET</a></li>
                          <li><a href="/about">ABOUT</a></li>
                        </ul>
                        </div>
                    </nav>
            </body>
			
			<section>

			<button   onClick={connectWalletHandler}><img src={wl}/></button>
			{errorMessage}
			<div className={styles.button6}>
				<h3 > Address: {defaultAccount}</h3>
				<h1 > Balance:  </h1 >
				<h2> {balance} HMT</h2>
				<div className={styles.line}></div>

				<Interactions contract = {contract}/>



			</div>
			
			</section>
				
	</div>
	)
}

export default Wallet;