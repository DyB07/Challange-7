import React from 'react';
import {useState} from 'react';
import styles from './style_item/item1.module.css';
const AccordionItem1 = () =>{
	const [open, setOpen] = useState(false);
	return(
		<div className={styles.accordion1}>
			<button onClick={() => setOpen(!open)} className={open?styles.accordion_btn_open:styles.accordion_btn}>Apa saja syarat yang dibutuhkan?</button>
		    <div className={open?styles.accordion_panel_open:styles.accordion_panel}>
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    </div>
		</div>
	);
}

export default AccordionItem1;