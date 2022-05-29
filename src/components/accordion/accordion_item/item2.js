import React from 'react';
import {useState} from 'react';
import styles from './style_item/item2.module.css';
const AccordionItem2 = () =>{
	const [open, setOpen] = useState(false);
	return(
		<div className={styles.accordion2}>
			<button onClick={() => setOpen(!open)} className={open?styles.accordion_btn_open:styles.accordion_btn}>Berapa hari minimal sewa mobil lepas kunci?</button>
		    <div className={open?styles.accordion_panel_open:styles.accordion_panel}>
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    </div>
		</div>
	);
}

export default AccordionItem2;