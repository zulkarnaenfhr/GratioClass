import React, { Component } from "react";
import "./GratioClass-Homepage-Section1.css";

export default class GratioClassHomepageSection1 extends Component {
    render() {
        return (
            <div id="sectionHomepage1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div id="sectionHomepage1-LeftSide">
                                <div>
                                    <h1 className="sectionHomepage1-Brand" data-aos="zoom-in-up" data-aos-duration="700">
                                        Gratio Class
                                    </h1>
                                    <p className="sectionHomepage1-shortDesc" data-aos="zoom-in-up" data-aos-duration="700" data-aos-delay="700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem deleniti fugit qui ea est eum at, ullam fugiat recusandae.
                                    </p>
                                    <button className="sectionHomepage1-button" data-aos="zoom-in-up" data-aos-duration="700" data-aos-delay="1400">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div id="sectionHomepage1-RightSide">
                                <h1>gambar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
