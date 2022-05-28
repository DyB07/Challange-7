import React from "react";
import gambar from '../../asset/img_car.png';
import Styles from './Main.module.css';

const Main = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
            </div>
            <div>
                <img className={Styles.gambar} src={gambar}/>
            </div>
        </div>
    )
}

export default Main;