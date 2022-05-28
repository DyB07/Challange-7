import React from "react";
import Styles from './lokasi.module.css';

const lokasi = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.</label><br></br>
                <button className={Styles.tombol}>Mulai Sewa Mobil</button>
            </div>
        </div>
    )
}

export default lokasi;