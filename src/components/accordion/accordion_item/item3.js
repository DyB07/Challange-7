import React from 'react';
import {useState} from 'react';
import styles from './style_item/item3.module.css';
const AccordionItem3 = () =>{
	const [open, setOpen] = useState(false);
	return(
		<div className={styles.accordion3}>
			<button onClick={() => setOpen(!open)} className={open?styles.accordion_btn_open:styles.accordion_btn}>Berapa hari sebelumnya sabaiknya booking sewa mobil?</button>
		    <div className={open?styles.accordion_panel_open:styles.accordion_panel}>
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    </div>
		</div>
	);
}

export default AccordionItem3;