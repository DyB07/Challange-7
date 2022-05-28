import React from 'react';
import Styles from './cars.module.css';
import user from '../../asset/fi_users.png';
import settings from '../../asset/fi_settings.png';
import calendar from '../../asset/fi_calendar.png';


export default function Card({product}) {
    return (
                <div className={Styles.card}>

                    <div className={Styles.title}>
                        <img src={product.image} className={Styles.oto} alt='' />
                    </div>
                    <div className={Styles.body}>
                        <h3>{product.manufacture}/{product.model}</h3>
                        <label>Rp {product.rentPerDay} / Hari</label>
                        <p>{product.description}</p>
                        <div className={Styles.icon}>
                            <img src={user} alt='' />
                            <label>{product.capacity} orang</label>
                        </div>
                        <div className={Styles.icon}>
                            <img src={settings} alt='' />
                            <label>{product.transmission}</label>
                        </div>
                        <div className={Styles.icon}>
                            <img src={calendar} alt='' />
                            <label>{product.year}</label>
                        </div>
                        <button>Pilih Mobil</button>
                    </div>
                </div>
    )
}