import React from "react";
import Styles from './style.module.css';
import like from '../../asset/like.png';
import tag from '../../asset/tag.png';
import time from '../../asset/time.png';
import medal from '../../asset/medal.png';

const WhyUs = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.judul}>
                <h4>Why Us</h4>
                <label>Mengapa Harus pilih Binar Car Rental?</label>
            </div>
            <div className={Styles.card}>
                <div className={Styles.like}>
                    <img className={Styles.img} src={like} />
                    <h4>Mobil Lengkap</h4>
                    <label>Tersedia Banyak pilihan mobil, kondisi masih baru, bersih dan terawat</label>
                </div>
                <div className={Styles.tag}>
                    <img className={Styles.img} src={tag} />
                    <h4>Harga Murah</h4>
                    <label>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</label>
                </div>
                <div className={Styles.time}>
                    <img className={Styles.img} src={time} />
                    <h4>Layanan 24 jam</h4>
                    <label>Siap melayani kebutuhan anda selama 24 jam nonstop. kami juga tersedia di akhir minggu</label>
                </div>
                <div className={Styles.medal}>
                    <img className={Styles.img} src={medal} />
                    <h4>Supir Profesional</h4>
                    <label>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</label>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;