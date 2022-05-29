import React from 'react'
/* import Styles from './testimoni.module.css'; */
import orang from '../../asset/user.png';
import star from '../../asset/star.png'
import klik from '../../asset/right.png'

const Testimoni = () => {
    return (
        <div className={Styles.testimoni}>
            <div className={Styles.TitleTestimonial}>
                <h3>Testimonial</h3>
                <label>Berbagai Review Positif dari para pelanggan kami</label>
            </div>

            <div className={Styles.rowTestimoni}>
                
                    <div id={Styles.card1} className={Styles.review}>
                        <div className={Styles.manusia}>
                            <img src={orang} />
                        </div>
                        <div className={Styles.konten}>
                            <div className={Styles.bintang}>
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                            </div>
                                <label>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</label>
                                <p>John Dee 32, Bromo</p>
                        </div>
                    </div>

                    <div id={Styles.card2} className={Styles.review}>
                        <div className={Styles.manusia}>
                            <img src={orang} />
                        </div>
                        <div className={Styles.konten}>
                            <div className={Styles.bintang}>
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                            </div>
                                <label>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</label>
                                <p>John Dee 32, Bromo</p>
                        </div>
                    </div>

                    <div id={Styles.card3} className={Styles.review}>
                        <div className={Styles.manusia}>
                            <img src={orang} />
                        </div>
                        <div className={Styles.konten}>
                            <div className={Styles.bintang}>
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                            </div>
                                <label>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</label>
                                <p>John Dee 32, Bromo</p>
                        </div>
                    </div>
            </div>
            <div className={Styles.BtnKlik}>
                <img className={Styles.klik} src={klik} />
                <img className={Styles.klik1} src={klik} />
            </div>

        </div>
    )
}

export default Testimoni;