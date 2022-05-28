import React from "react";
import { useNavigate } from "react-router-dom";
import gambar from '../../asset/img_car.png';
import Styles from './Dashboard.module.css';

const Dashboard = () => {

    let navigation = useNavigate();
    function Sewa() {
        navigation('/sewa');
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
                <button onClick={Sewa}>Mulai Sewa Mobil</button>
            </div>
            <div>
                <img className={Styles.gambar} src={gambar}/>
            </div>
        </div>
    )
}

export default Dashboard;