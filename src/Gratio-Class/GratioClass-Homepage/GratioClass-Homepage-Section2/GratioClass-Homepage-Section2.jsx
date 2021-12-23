import React, { Component } from "react";
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
                                    <h1 className="sectionHomepage2-title">halo semuanya</h1>
                                    <p className="sectionHomepage2-penjelasan">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut culpa nobis magnam molestias odit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div id="sectionHomepage2-RightSide">
                                <div className="sectionHomepage2-RightSide-Row">
                                    <div className="row">
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="far fa-clock"></i>
                                                <h3>lorem</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fas fa-chalkboard-teacher"></i>
                                                <h3>lorem</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fas fa-chart-line"></i>
                                                <h3>lorem</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 gratioFeatures">
                                            <div>
                                                <i class="fab fa-connectdevelop"></i>
                                                <h3>lorem</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam.</p>
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
