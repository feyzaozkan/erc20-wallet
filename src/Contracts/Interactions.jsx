import {React, useState} from 'react'
import styles from '../components/Wallet.module.css';

const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();
	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
		console.log(txt);
		setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
			<div >
				<form onSubmit={transferHandler}>
					<p> Transfer Coins </p>
						<p> Reciever Address </p>
						<input type='text' id='recieverAddress' className={styles.addressInput}/>
						<p> Send Amount </p>
						<input type='number' id='sendAmount' min='0' step='1' className={styles.sendInput} required/>
						<h1><button type='submit'>Send</button></h1>
						<div>
							<h4>Transfer confirmation hash:{transferHash}</h4>
						</div>
			</form>
			</div>
		)
	
}

export default Interactions;