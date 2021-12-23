import React, { Component } from "react";
import "./GratioClass-Homepage-Section3.css";

export default class GratioClassHomepageSection3 extends Component {
    render() {
        return (
            <div id="sectionHomepage3">
                <div className="container">
                    <div className="sectionHomepage3-container">
                        <h1 className="sectionHomepage3-Title">Category Class</h1>
                        <div className="row card-row-container">
                            <div className="col-xl-3 col-md-6 ">
                                <div className="card-class-container cardUiUx">
                                    <p className="card-title">UI/UX DESIGN</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 cardMdSide cardSGraphicDesign">
                                <div className="card-class-container cardGraphicDesign">
                                    <p className="card-title">
                                        GRAPHIC <br /> DESIGN
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 cardRowMd2">
                                <div className="card-class-container cardDesign3D">
                                    <p className="card-title">DESIGN 3D</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 cardRowMd2 cardMdSide">
                                <div className="card-class-container cardVideoEditing">
                                    <p className="card-title">
                                        VIDEO EDITING <br /> & MOTION
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
