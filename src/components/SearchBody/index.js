import  {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { importCar, carsFilter } from '../../slicer';

/* import Styles from "./Search.module.css"; */
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
        <div className="mainmodal">

                <div className="dashboard-main">

                    <div className="text-main">
                        <label>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</label>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga terjangkau. Selalu siap melayani kebutuhanmu sewa mobil selama 24 jam.</p>
                    </div>
                    <div>
                        <img className="gambar" src={gambar} alt='' />
                    </div>

                </div>

                <div className="modal">

                    <div className="row-modal">
                        <div className="type">
                            <label>Tipe Driver</label>
                            <select className="pilihan" onChange={handleChange} >
                                <option hidden>Pilih Type Driver</option>
                                <option value="true">Dengan Supir</option>
                                <option value="false">Tanpa Supir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="tanggal">
                            <label>Tanggal</label> <br />
                            <input className="hari" type="date" onChange={handleChange} value={inputs.date} />
                        </div>
                        <div className="jam">
                            <label>Waktu Jemput</label>
                            <select className="waktu" onChange={handleChange} value={inputs.time} >
                                <option hidden>Pilih Waktu</option>
                                <option value="8">08.00 WIB</option>
                                <option value="9">09.00 WIB</option>
                                <option value="10">10.00 WIB</option>
                                <option value="11">11.00 WIB</option>
                                <option value="12">12.00 WIB</option>
                            </select>
                        </div>    
                        <div className="penumpang" onChange={handleChange} value={inputs.capacity}>
                            <label>Jumlah Penumpang</label>
                            <select className="orang">
                                <option hidden>Jumlah Penumpang</option>
                                <option value="2">2 Orang</option>
                                <option value="4">4 Orang</option>
                                <option value="6">6 Orang</option>
                                <option value="8">8 Orang</option>
                            </select>
                        </div>
                        <div className="tombol">
                            <button className="cari" onClick={handleSubmit}>Cari Mobil</button>
                        </div>
                    </div>

                </div>

                <div className="cars">

                    <div id="card-car" class="result" className="cardbody">
                        {
                            cars.map((item, index) => <Card key={index} product={item} />)
                        }
                    </div>

                </div>

        </div>
    )
}

export default SearchBody;