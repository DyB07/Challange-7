import React from 'react';
import styles from './accordion.module.css';
import Item1 from './accordion_item/item1';
import Item2 from './accordion_item/item2';
import Item3 from './accordion_item/item3';
import Item4 from './accordion_item/item4';
import Item5 from './accordion_item/item5';

const Accordion = () => {
	return(
		<div className={styles.accordion}>
			<div className={styles.accordionText}>
				<h2>Frequently Asked Question</h2>
				<label>Lorem ipsum dolor sit amet, consectetur adipisicing elit</label>
			</div>
			<div>
				<Item1 />
				<Item2 />
				<Item3 />
				<Item4 />
				<Item5 />
			</div>

		</div>
	);
}

export default Accordion;