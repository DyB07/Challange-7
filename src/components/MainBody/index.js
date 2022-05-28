import React from 'react';
import { useNavigate } from "react-router-dom";
/* import Styles from './Main.module.css'; */

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
        <div className="Maindasboard">

            <div className="dashboard">
                <div className="text1">
                    <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
                    <button onClick={Sewa}>Mulai Sewa Mobil</button>
                </div>
                <div>
                    <img className="gambar" src={gambar} alt=''/>
                </div>
            </div>

            <div className="ourservice">
                <div className="gambar">
                    <img src={gambar1} alt='' />
                </div>
                <div className="text2">
                    <label>Best Car Rental for any kind of trip in (Lokasimu)!</label>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul>
                        <li className="list1">
                            <img className="icon" src={icon} alt=''/>
                            <label className="label">Sewa Mobil Dengan Supir di Bali 12 Jam</label>
                        </li>
                        <li className="list1">
                            <img className="icon" src={icon} alt=''/>
                            <label >Sewa Mobil Lepas Kunci di Bali 24 Jam</label>
                        </li>
                        <li className="list1">
                            <img className="icon" src={icon} alt=''/>
                            <label >Sewa Mobil Jangka Panjang Bulanan</label>
                        </li>
                        <li className="list1">
                            <img className="icon" src={icon} alt=''/>
                            <label >Gratis Antar - Jemput Mobil di Bandara</label>
                        </li>
                        <li className="list1">
                            <img className="icon" src={icon} alt=''/>
                            <label >Layanan Airport Transfer / Drop In Out</label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="whyus">
                <div className="judul">
                    <h4>Why Us</h4>
                    <label>Mengapa Harus pilih Binar Car Rental?</label>
                </div>
                <div className="card">
                    <div className="like">
                        <img className="img" src={like} alt=''/>
                        <h4>Mobil Lengkap</h4>
                        <label>Tersedia Banyak pilihan mobil, kondisi masih baru, bersih dan terawat</label>
                    </div>
                    <div className="tag">
                        <img className="img" src={tag} alt=''/>
                        <h4>Harga Murah</h4>
                        <label>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</label>
                    </div>
                    <div className="time">
                        <img className="img" src={time} alt=''/>
                        <h4>Layanan 24 jam</h4>
                        <label>Siap melayani kebutuhan anda selama 24 jam nonstop. kami juga tersedia di akhir minggu</label>
                    </div>
                    <div className="medal">
                        <img className="img" src={medal} alt=''/>
                        <h4>Supir Profesional</h4>
                        <label>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</label>
                    </div>
                </div>
            </div>

            <div className='lokasi'>
                <div className="tampilan">
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.</label><br></br>
                    <button className="tombol">Mulai Sewa Mobil</button>
                </div>
            </div>

        </div>
    )
}

export default MainBody;