import React, { Component } from "react";
import "./GratioClass-Homepage-Section6.css";

export default class GratioClassHomepageSection6 extends Component {
    render() {
        return (
            <div id="sectionHomepage6">
                <div className="container sectionHomepage6-container">
                    <div className="row">
                        <div className="col-6">
                            <p className="sectionHomepage6-Title">Gratio Class</p>
                            <p>Gratio Class adalah sebuah platform edukasi online khusus di bidang desain dan startup yang didirikan pada Oktober 2021</p>
                            <p>0331-113431285 gratioclass@gmail.com</p>
                        </div>
                        <div className="col-3">
                            <p className="sectionHomepage6-Title">Menu</p>
                            <p>Categori</p>
                            <ul>
                                <li>Graphic Design</li>
                                <li>UI/UX Desiign</li>
                                <li>3D Design</li>
                                <li>Video Editing & Motion</li>
                            </ul>
                            <p>All Class</p>
                            <p>Showcase</p>
                            <p>Event</p>
                        </div>
                        <div className="col-3">
                            <p className="sectionHomepage6-Title">Office</p>
                            <p>Surabaya, Jawa Timur</p>
                            <p className="sectionHomepage6-Title">Support</p>
                            <p>Whatsapp</p>
                            <p>FAQ</p>
                            <p className="sectionHomepage6-Title">Partner</p>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
