import React from 'react';

/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './technologyUse.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/carousel'

import { techUseItems } from './techUseItems';

import htmlLogo from '../../../image/about/TechnologiesLogo/htmlLogo.png'

function TechnologyUse(){
    return(
        <div className="section ">
            <div className="container">
                <div className="row mb-3 text-center" data-aos="fade-up">
                    <span className="subheading d-block">Developing Website</span>
                    <h2 className="heading">Technologies Uses</h2>   
                </div>
            

                <div className="carousel slide bg-gray" data-aos="fade-up" data-bs-ride="carousel" id="techCarousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#techCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#techCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#techCarousel" data-bs-slide-to="2"></li>
                        <li data-bs-target="#techCarousel" data-bs-slide-to="3"></li>
                        <li data-bs-target="#techCarousel" data-bs-slide-to="4"></li>
                        <li data-bs-target="#techCarousel" data-bs-slide-to="5"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div className="container">
                                <div className="card" style={{backgroundColor: "#B2B1B9", border: "none"}}>
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                            <div className="text-center">
                                                <img src={htmlLogo} alt="htmlLogo" className="img-fluid" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-7">
                                            <div className="card-block">
                                                <h1 className="card-title">HTML </h1>
                                                <p className="card-text">
                                                    The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.    
                                                </p>
                                                <span><a href="https://en.wikipedia.org/wiki/HTML">Learn More</a></span>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {techUseItems.map((item, index) =>{
                            return (
                                <div className="carousel-item" key={index}>

                                    <div className="container">
                                        <div className="card" style={{backgroundColor: "#B2B1B9", border: "none"}}>
                                            <div className="row">
                                                <div className="col-md-1"></div>
                                                <div className="col-md-3">
                                                    <div className="text-center">
                                                        <img src={item.logo} alt={item.logo} className="img-fluid" />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-7">
                                                    <div className="card-block">
                                                        <h1 className="card-title">{item.title}</h1>
                                                        <p className="card-text">{item.description}</p>
                                                        <span><a href={item.url}>Learn More</a></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                        
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#techCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#techCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TechnologyUse