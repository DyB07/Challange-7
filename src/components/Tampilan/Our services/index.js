import React from "react";
import gambar from '../../asset/img_service.png';
import icon from '../../asset/list.png';
import Styles from './Services.module.css';

const Services = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.gambar}>
                <img src={gambar} />
            </div>
            <div className={Styles.text}>
                <label>Best Car Rental for any kind of trip in (Lokasimu)!</label>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    <li className={Styles.list}>
                        <img className={Styles.icon} src={icon}/>
                        <label>Sewa Mobil Dengan Supir di Bali 12 Jam</label>
                    </li>
                    <li className={Styles.list}>
                        <img className={Styles.icon} src={icon}/>
                        <label>Sewa Mobil Lepas Kunci di Bali 24 Jam</label>
                    </li>
                    <li className={Styles.list}>
                        <img className={Styles.icon} src={icon}/>
                        <label>Sewa Mobil Jangka Panjang Bulanan</label>
                    </li>
                    <li className={Styles.list}>
                        <img className={Styles.icon} src={icon}/>
                        <label>Gratis Antar - Jemput Mobil di Bandara</label>
                    </li>
                    <li className={Styles.list}>
                        <img className={Styles.icon} src={icon}/>
                        <label>Layanan Airport Transfer / Drop In Out</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Services;