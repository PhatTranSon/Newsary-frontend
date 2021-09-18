/* React Setup (React, React Router DOM) */
import React, {useEffect} from 'react';

/* AOS Animation */
import Aos from 'aos';
import 'aos/dist/aos.css'

/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './about.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/popover'
import 'bootstrap/js/dist/carousel'

/* Image Import */
import learningEngNews from '../../../image/about/learn-english-news.png'
import teenLearningEng from '../../../image/about/studentLearningEng.png'
import dictionary from '../../../image/about/dictionary.png'
import newspaper from '../../../image/about/newspaper.png'
import multipleChoice from '../../../image/about/multiple-choice.png'

/* Creator Img */
import MinhImg from '../../../image/about/creator/1.png'
import PhatImg from '../../../image/about/creator/1.png'
import LoiImg from '../../../image/about/creator/1.png'
import TrungImg from '../../../image/about/creator/1.png'
import DungImg from '../../../image/about/creator/1.png'

import TechnologyUse from './technologyUse'

const About = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return(
        <div id="AboutUs" className="about-container-wrapper">
            <div className="section pt-0 bg-img py-5 overlay">
                <div className="container top-title">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-7">
                            <h2 className="text-white mb-3 fw-bold" data-aos="fade-up" data-aos-delay="0">About Us</h2>
                            <p className="text-white h5 mb-4" data-aos="fade-up" data-aos-delay="100">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row mb-5 text-center" data-aos="fade-up">
                        <span className="subheading d-block">Awesome Team</span>
                        <h2 className="heading">Team</h2>   
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mx-auto contents">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team">
                                        <img src={MinhImg} alt="" className="img-fluid mb-4 team-img" />
                                        <h3>Pham Hoang Minh</h3>
                                        <span className="d-block mb-3"></span>
                                        <p>-Description-</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team">
                                        <img src={PhatImg} alt="" className="img-fluid mb-4 team-img" />
                                        <h3>Tran Son Phat</h3>
                                        <span className="d-block mb-3"></span>
                                        <p>-Description-</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team">
                                        <img src={LoiImg} alt="" className="img-fluid mb-4 team-img" />
                                        <h3>Phan Thanh Loi</h3>
                                        <span className="d-block mb-3"></span>
                                        <p>-Description-</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-6 text-center" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team">
                                        <img src={TrungImg} alt="" className="img-fluid mb-4 team-img" />
                                        <h3>Hua Tien Trung</h3>
                                        <span className="d-block mb-3"></span>
                                        <p>-Description-</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-6 text-center" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team">
                                        <img src={DungImg} alt="" className="img-fluid mb-4 team-img" />
                                        <h3>Nguyen Hoang Dung</h3>
                                        <span className="d-block mb-3"></span>
                                        <p>-Description-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 order-lg-2 " data-aos="fade-left">
                            <img src={learningEngNews} alt="learningEngNews" className="img-fluid" />
                            <img src={teenLearningEng} alt="teenLearningEng" className="img-fluid" style={{width: "79%", paddingTop: "50px"}} />
                        </div>
                        <div className="col-lg-5">
                            <div className="">
                                <span className="subheading d-block" data-aos="fade-right" data-aos-delay="0">Mission</span>
                                <h2 className="heading text-black mb-4" data-aos="fade-right" data-aos-delay="0">About Us</h2>
                                <p className="mb-5" data-aos="fade-right" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <div className="feature d-flex mb-5" data-aos="fade-right" data-aos-delay="200">
                                    <div className="icon">
                                        <img src={dictionary} alt="team-img" className="img-fluid" />
                                    </div>

                                    <div className="text">
                                        <h3 className="heading">Air Freight</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="feature d-flex mb-5" data-aos="fade-right" data-aos-delay="300">
                                    <div className="icon">
                                        <img src={newspaper} alt="team-img" className="img-fluid" />
                                    </div>

                                    <div className="text">
                                        <h3 className="heading">Air Freight</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="feature d-flex" data-aos="fade-right" data-aos-delay="300">
                                    <div className="icon">
                                        <img src={multipleChoice} alt="team-img" className="img-fluid"/>
                                    </div>

                                    <div className="text">
                                        <h3 className="heading">Air Freight</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TechnologyUse />
        </div>
    )
}

export default About