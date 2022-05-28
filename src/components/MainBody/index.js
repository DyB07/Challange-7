import React from 'react';
import { useNavigate } from "react-router-dom";
import Styles from './Main.module.css';

import gambar from '../../asset/img_car.png';
import gambar1 from '../../asset/img_service.png';
import icon from '../../asset/list.png';
import like from '../../asset/like.png';
import tag from '../../asset/tag.png';
import time from '../../asset/time.png';
import medal from '../../asset/medal.png';


const MainBody = () => {

    let navigation = useNavigate();
    function Sewa() {
        navigation('/sewa');
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.dashboard}>
                <div className={Styles.text1}>
                    <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
                    <button onClick={Sewa}>Mulai Sewa Mobil</button>
                </div>
                <div>
                    <img className={Styles.gambar} src={gambar} alt=''/>
                </div>
            </div>

            <div className={Styles.ourservice}>
                <div className={Styles.gambar}>
                    <img src={gambar1} alt='' />
                </div>
                <div className={Styles.text2}>
                    <label>Best Car Rental for any kind of trip in (Lokasimu)!</label>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul>
                        <li className={Styles.list}>
                            <img className={Styles.icon} src={icon} alt=''/>
                            <label>Sewa Mobil Dengan Supir di Bali 12 Jam</label>
                        </li>
                        <li className={Styles.list}>
                            <img className={Styles.icon} src={icon} alt=''/>
                            <label>Sewa Mobil Lepas Kunci di Bali 24 Jam</label>
                        </li>
                        <li className={Styles.list}>
                            <img className={Styles.icon} src={icon} alt=''/>
                            <label>Sewa Mobil Jangka Panjang Bulanan</label>
                        </li>
                        <li className={Styles.list}>
                            <img className={Styles.icon} src={icon} alt=''/>
                            <label>Gratis Antar - Jemput Mobil di Bandara</label>
                        </li>
                        <li className={Styles.list}>
                            <img className={Styles.icon} src={icon} alt=''/>
                            <label>Layanan Airport Transfer / Drop In Out</label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={Styles.whyus}>
                <div className={Styles.judul}>
                    <h4>Why Us</h4>
                    <label>Mengapa Harus pilih Binar Car Rental?</label>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.like}>
                        <img className={Styles.img} src={like} alt=''/>
                        <h4>Mobil Lengkap</h4>
                        <label>Tersedia Banyak pilihan mobil, kondisi masih baru, bersih dan terawat</label>
                    </div>
                    <div className={Styles.tag}>
                        <img className={Styles.img} src={tag} alt=''/>
                        <h4>Harga Murah</h4>
                        <label>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</label>
                    </div>
                    <div className={Styles.time}>
                        <img className={Styles.img} src={time} alt=''/>
                        <h4>Layanan 24 jam</h4>
                        <label>Siap melayani kebutuhan anda selama 24 jam nonstop. kami juga tersedia di akhir minggu</label>
                    </div>
                    <div className={Styles.medal}>
                        <img className={Styles.img} src={medal} alt=''/>
                        <h4>Supir Profesional</h4>
                        <label>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</label>
                    </div>
                </div>
            </div>

            <div className={Styles.lokasi}>
                <div className={Styles.row}>
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.</label><br></br>
                    <button className={Styles.tombol}>Mulai Sewa Mobil</button>
                </div>
            </div>

        </div>
    )
}

export default MainBody;