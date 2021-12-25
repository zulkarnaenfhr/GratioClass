import React, { Component } from "react";
import "./GratioClass-Homepage-Section6.css";

export default class GratioClassHomepageSection6 extends Component {
    render() {
        return (
            <div id="sectionHomepage6">
                <div className="container sectionHomepage6-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="sectionHomepage6-Title">Gratio Class</p>
                            <p className="sectionHomepage6-11-desc">Gratio Class adalah sebuah platform edukasi online khusus di bidang desain dan startup yang didirikan pada Oktober 2021</p>
                            <p className="sectionHomepage6-12-desc">Contact : 0331-113431285, gratioclass@gmail.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="sectionHomepage6-Title">Menu</p>
                            <p className="sectionHomepage6-2-desc">Category</p>
                            <ul className="categori-ul">
                                <li>
                                    <a className="sectionHomepage6-link" href="">
                                        Graphic Design
                                    </a>
                                </li>
                                <li>
                                    <a className="sectionHomepage6-link" href="">
                                        UI/UX Desiign
                                    </a>
                                </li>
                                <li>
                                    <a className="sectionHomepage6-link" href="">
                                        3D Design
                                    </a>
                                </li>
                                <li>
                                    <a className="sectionHomepage6-link" href="">
                                        Video Editing & Motion
                                    </a>
                                </li>
                            </ul>
                            <p className="sectionHomepage6-2-desc">
                                <a className="sectionHomepage6-link" href="">
                                    All Class
                                </a>
                            </p>
                            <p className="sectionHomepage6-2-desc">
                                <a className="sectionHomepage6-link" href="">
                                    Showcase
                                </a>
                            </p>
                            <p className="sectionHomepage6-2-desc">
                                <a className="sectionHomepage6-link" href="">
                                    Event
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <p className="sectionHomepage6-Title">Office</p>
                                    <p className="sectionHomepage6-3-desc">Surabaya, Jawa Timur</p>
                                    <p className="sectionHomepage6-Title">Support</p>
                                    <p className="sectionHomepage6-3-desc">
                                        <a className="sectionHomepage6-link" href="">
                                            Whatsapp
                                        </a>
                                    </p>
                                    <p className="sectionHomepage6-3-desc">
                                        <a className="sectionHomepage6-link" href="">
                                            FAQ
                                        </a>
                                    </p>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <p className="sectionHomepage6-Title">Partner</p>
                                    <p className="sectionHomepage6-4-desc">Lorem, ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
