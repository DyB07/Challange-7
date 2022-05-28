import React from 'react';
/* import Styles from './cars.module.css'; */
import user from '../../asset/fi_users.png';
import settings from '../../asset/fi_settings.png';
import calendar from '../../asset/fi_calendar.png';


export default function Card({product}) {
    return (    
            <div className="card-cars">

                <div className="title">
                    <img src={product.image} className="oto" alt='' />
                </div>

                <div className="cars-body">
                    <h3>{product.manufacture}/{product.model}</h3>
                    <label>Rp {product.rentPerDay} / Hari</label>
                    <p>{product.description}</p>

                    <div className="cars-icon">
                        <img src={user} alt='' />
                        <label>{product.capacity} orang</label>
                    </div>
                    <div className="cars-icon">
                        <img src={settings} alt='' />
                        <label>{product.transmission}</label>
                    </div>
                    <div className="cars-icon">
                        <img src={calendar} alt='' />
                        <label>{product.year}</label>
                    </div>
                    <button>Pilih Mobil</button>
                    
                </div>
            </div>
    )
}