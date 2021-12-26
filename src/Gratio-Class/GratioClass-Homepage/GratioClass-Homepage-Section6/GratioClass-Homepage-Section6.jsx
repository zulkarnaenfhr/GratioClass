import React, { Component } from "react";
import "./GratioClass-Homepage-Section6.css";
import { Link, Route, Routes } from "react-router-dom";
import Maintenance from "../../GratioClass-Maintenance/Maintenance";

export default class GratioClassHomepageSection6 extends Component {
    render() {
        return (
            <div id="sectionHomepage6">
                <div className="container sectionHomepage6-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="sectionHomepage6-Title" data-aos="fade-up">
                                Gratio Class
                            </p>
                            <p className="sectionHomepage6-11-desc" data-aos="fade-up" data-aos-delay="500">
                                Gratio Class adalah sebuah platform edukasi online khusus di bidang desain dan startup yang didirikan pada Oktober 2021
                            </p>
                            <p className="sectionHomepage6-12-desc" data-aos="fade-up" data-aos-delay="500">
                                Contact : 0331-113431285, gratioclass@gmail.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="sectionHomepage6-Title" data-aos="fade-up">
                                Menu
                            </p>
                            <p className="sectionHomepage6-2-desc" data-aos="fade-up" data-aos-delay="500">
                                Category
                            </p>
                            <ul className="categori-ul" data-aos="fade-up" data-aos-delay="500">
                                {/* <li>
                                    <a className="sectionHomepage6-link" href="">
                                        Graphic Design
                                    </a>
                                </li> */}
                                <li>
                                    <Link to="/maintenance">Graphic Design</Link>
                                </li>
                                <li>
                                    {/* <a className="sectionHomepage6-link" href="">
                                        UI/UX Desiign
                                    </a> */}
                                    <Link to="/maintenance">UI/UX Desiign</Link>
                                </li>
                                <li>
                                    {/* <a className="sectionHomepage6-link" href="">
                                        3D Design
                                    </a> */}
                                    <Link to="/maintenance">3D Design</Link>
                                </li>
                                <li>
                                    {/* <a className="sectionHomepage6-link" href="">
                                        Video Editing & Motion
                                    </a> */}
                                    <Link to="/maintenance">Video Editing & Motion</Link>
                                </li>
                            </ul>
                            <p className="sectionHomepage6-2-desc" data-aos="fade-up" data-aos-delay="500">
                                {/* <a className="sectionHomepage6-link" href="">
                                    All Class
                                </a> */}
                                <Link to="/maintenance">All Class</Link>
                            </p>
                            <p className="sectionHomepage6-2-desc" data-aos="fade-up" data-aos-delay="500">
                                {/* <a className="sectionHomepage6-link" href="">
                                    Showcase
                                </a> */}
                                <Link to="/maintenance">Showcase</Link>
                            </p>
                            <p className="sectionHomepage6-2-desc" data-aos="fade-up" data-aos-delay="500">
                                {/* <a className="sectionHomepage6-link" href="">
                                    Event
                                </a> */}
                                <Link to="/maintenance">Event</Link>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <p className="sectionHomepage6-Title" data-aos="fade-up">
                                        Office
                                    </p>
                                    <p className="sectionHomepage6-3-desc" data-aos="fade-up" data-aos-delay="500">
                                        Surabaya, Jawa Timur
                                    </p>
                                    <p className="sectionHomepage6-Title" data-aos="fade-up">
                                        Support
                                    </p>
                                    <p className="sectionHomepage6-3-desc" data-aos="fade-up" data-aos-delay="500">
                                        {/* <a className="sectionHomepage6-link" href="">
                                            Whatsapp
                                        </a> */}
                                        <Link to="/maintenance">Whatsapp</Link>
                                    </p>
                                    <p className="sectionHomepage6-3-desc" data-aos="fade-up" data-aos-delay="500">
                                        {/* <a className="sectionHomepage6-link" href="">
                                            FAQ
                                        </a> */}
                                        <Link to="/maintenance">FAQ</Link>
                                    </p>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <p className="sectionHomepage6-Title" data-aos="fade-up">
                                        Partner
                                    </p>
                                    <p className="sectionHomepage6-4-desc" data-aos="fade-up" data-aos-delay="500">
                                        Lorem, ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/Homepage/maintenance" element={<Maintenance />} />
                    </Routes>
                </div>
            </div>
        );
    }
}
