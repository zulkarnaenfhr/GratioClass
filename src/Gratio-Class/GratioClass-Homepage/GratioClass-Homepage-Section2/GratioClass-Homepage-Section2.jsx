import React, { Component, useEffect } from "react";
import "./GratioClass-Homepage-Section2.css";

export default class GratioClassHomepageSection2 extends Component {
    render() {
        return (
            <div id="sectionHomepage2">
                <div className="container">
                    <div className="row sectionHomepage2-content">
                        <div className="col-md-4">
                            <div id="sectionHomepage2-LeftSide">
                                <div>
                                    <h1 className="sectionHomepage2-title" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700">
                                        halo semuanya
                                    </h1>
                                    <p className="sectionHomepage2-penjelasan" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="700">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut culpa nobis magnam molestias odit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div id="sectionHomepage2-RightSide">
                                <div className="sectionHomepage2-RightSide-Row">
                                    <div className="row">
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="far fa-clock" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700"></i>
                                                <h3 data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="500">
                                                    lorem
                                                </h3>
                                                <p data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="1000">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fas fa-chalkboard-teacher" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700"></i>
                                                <h3 data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="500">
                                                    lorem
                                                </h3>
                                                <p data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="1000">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fas fa-chart-line" data-aos="zoom-in-up" data-aos-duration="700"></i>
                                                <h3 data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="500">
                                                    lorem
                                                </h3>
                                                <p data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="1000">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fab fa-connectdevelop" data-aos="zoom-in-up" data-aos-duration="700"></i>
                                                <h3 data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="500">
                                                    lorem
                                                </h3>
                                                <p data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="700" data-aos-delay="1000">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const maman = () => {
//     useEffect(() => {
//         Aos.init({ duration: 1000 });
//     }, []);
// };

// export default maman;
