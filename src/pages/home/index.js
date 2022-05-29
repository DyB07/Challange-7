import React from "react";
import Navbar from '../../components/Navbar';
/* import Dashboard from '../../components/Dashboard';
import Services from '../../components/Our services'; */
import MainBody from "../../components/MainBody";
/* import WhyUs from '../../components/Why us';
import Lokasi from '../../components/Lokasi'; */
/* import Testimoni from "../../components/Testimoni"; */
import Accordion from "../../components/accordion/Accordion";
import Footer from "../../components/footer";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <MainBody/>
            <Accordion/>
            <Footer/>
        </div>
    )
}