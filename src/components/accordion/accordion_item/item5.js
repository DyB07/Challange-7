import React from 'react';
import {useState} from 'react';
import styles from './style_item/item5.module.css';
const AccordionItem5 = () =>{
	const [open, setOpen] = useState(false);
	return(
		<div className={styles.accordion5}>
			<button onClick={() => setOpen(!open)} className={open?styles.accordion_btn_open:styles.accordion_btn}>Bagaimana jika terjadi kecelakaan</button>
		    <div className={open?styles.accordion_panel_open:styles.accordion_panel}>
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    </div>
		</div>
	);
}

export default AccordionItem5;