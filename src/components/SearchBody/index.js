import  {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { importCar, carsFilter } from '../../slicer';

import Styles from "./Search.module.css";
import Card from "../Card";

import gambar from '../../asset/img_car.png'

const SearchBody = () => {

    const dispatch = useDispatch();

    const getData = () => {
        axios
        .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
        .then((res) => {
            dispatch(importCar(res.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const initialValue = {
        driver: "",
        date: "",
        time: "",
        capacity: 0,
    };

    const [inputs, setInputs] = useState(initialValue);

    const handleSubmit = () => {
        if(JSON.stringify(inputs) === JSON.stringify(initialValue)) {
        getData();
        } else {
        dispatch(carsFilter(inputs));
        }
    };

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const cars = useSelector((state) => state.sliceReducer.data);

    return (
        <div className={Styles.container}>

                <div className={Styles.dashboard}>

                    <div className={Styles.text}>
                        <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
                    </div>
                    <div>
                        <img className={Styles.gambar} src={gambar} alt='' />
                    </div>

                </div>

                <div className={Styles.modal}>

                    <div className={Styles.row}>
                        <div className={Styles.type}>
                            <label>Tipe Driver</label>
                            <select className={Styles.pilihan} onChange={handleChange} >
                                <option hidden>Pilih Type Driver</option>
                                <option value="true">Dengan Supir</option>
                                <option value="false">Tanpa Supir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className={Styles.tanggal}>
                            <label>Tanggal</label> <br />
                            <input className={Styles.hari} type="date" onChange={handleChange} value={inputs.date} />
                        </div>
                        <div className={Styles.jam}>
                            <label>Waktu Jemput</label>
                            <select className={Styles.waktu} onChange={handleChange} value={inputs.time} >
                                <option hidden>Pilih Waktu</option>
                                <option value="8">08.00 WIB</option>
                                <option value="9">09.00 WIB</option>
                                <option value="10">10.00 WIB</option>
                                <option value="11">11.00 WIB</option>
                                <option value="12">12.00 WIB</option>
                            </select>
                        </div>    
                        <div className={Styles.penumpang} onChange={handleChange} value={inputs.capacity}>
                            <label>Jumlah Penumpang</label>
                            <select className={Styles.orang}>
                                <option hidden>Jumlah Penumpang</option>
                                <option value="2">2 Orang</option>
                                <option value="6">6 Orang</option>
                                <option value="8">8 Orang</option>
                            </select>
                        </div>
                        <div className={Styles.tombol}>
                            <button className={Styles.cari} onClick={handleSubmit}>Cari Mobil</button>
                        </div>
                    </div>

                </div>

                <div className={Styles.cars}>

                    <div className={Styles.body1} id="card-car" class="result">
                        {
                            cars.map((item, index) => <Card key={index} product={item} />)
                        }
                    </div>

                </div>

        </div>
    )
}

export default SearchBody;