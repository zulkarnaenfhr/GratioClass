import React, { Component } from "react";
import "./GratioClass-Homepage-Section4.css";

export default class GratioClassHomepageSection4 extends Component {
    render() {
        return (
            <div id="sectionHomepage4">
                <div className="container sectionHomepage4-container">
                    <h1 className="sectionHomepage4-Title">Flash Sale Today</h1>
                    <div className="row cardFlashSaleRow">
                        <div className="col-md-6 flashSaleCardLeft">
                            <div className="flashSale-card flashSale-card-left-container">
                                <div className="flashSale-card-left-content">
                                    <div className="row container flashSale-card-left-content-firstRow">
                                        <div className="col-4">
                                            <p className="flashSale-content-row1-left">
                                                Gratio <br /> Class.
                                            </p>
                                        </div>
                                        <div className="col-8">
                                            <p className="flashSale-content-row1-right">200 peserta | 19 DES 2021</p>
                                        </div>
                                    </div>
                                    <div className="row container flashSale-card-left-content-secondRow">
                                        <p className="flashSale-content-row2-left">KELAS ONLINE</p>
                                    </div>
                                    <div className="row  flashSale-card-left-content-thirdRow">
                                        <div className="col-4">
                                            <p className="flashSale-content-row3-left">FLASH SALE</p>
                                        </div>
                                        <div className="col-8 flashSale-content-row3-right">
                                            <div className="flashSale-content-row3-right-container">
                                                <p className="flashSale-price">
                                                    <span>499K </span>
                                                    299k
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row container flashSale-card-left-content-fourthRow">
                                        <p className="flashSale-content-row4">UI/UX DESIGN, GRAPHIC DESIGN, 3D DESIGN, VIDEO EDITING & MOTION</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 flashSaleCardRight">
                            <div className="flashSale-card flashSale-card-right-container">
                                <div className="container flashSale-card-right-content">
                                    <div>
                                        <p className="flashSale-card-right-content-row1">KODE KUPON :</p>
                                        <p className="flashSale-card-right-content-row2">TANGGALTUA</p>
                                        <p className="flashSale-card-right-content-row3">BERLAKU UNTUK SEMUA KELAS</p>
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
