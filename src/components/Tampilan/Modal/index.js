import React from "react";
import Styles from './modal.module.css';

const Modal = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <div className={Styles.type}>
                    <label>Tipe Driver</label>
                    <select className={Styles.pilihan}>
                        <option hidden>Pilih Type Driver</option>
                        <option value={true}>Dengan Supir</option>
                        <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className={Styles.tanggal}>
                    <label>Tanggal</label> <br />
                    <input className={Styles.hari} type="date" />
                </div>
                <div className={Styles.jam}>
                    <label>Waktu Jemput</label>
                    <select className={Styles.waktu}>
                        <option hidden>Pilih Waktu</option>
                        <option>08.00 WIB</option>
                        <option>09.00 WIB</option>
                        <option>10.00 WIB</option>
                        <option>11.00 WIB</option>
                        <option>12.00 WIB</option>
                    </select>
                </div>    
                <div className={Styles.penumpang}>
                    <label>Jumlah Penumpang</label>
                    <select className={Styles.orang}>
                        <option hidden>Jumlah Penumpang</option>
                        <option>2 Orang</option>
                        <option>6 Orang</option>
                        <option>8 Orang</option>
                    </select>
                </div>
                <div className={Styles.tombol}>
                    <button className={Styles.cari}>Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;