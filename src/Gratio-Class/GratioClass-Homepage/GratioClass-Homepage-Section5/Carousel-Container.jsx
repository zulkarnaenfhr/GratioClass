import React, { Component } from "react";
import "./Carousel-Container.css";

const CarouselContainer = (props) => {
    return (
        <div class={"carousel-item " + props.addClass}>
            <div className="carousel-container">
                <div className="container">
                    <div className="row carousel-content">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4 carousel-content-left">
                            <img className="WhatTheySay-img" src={props.imgSrc} alt={props.imgSrc} />
                        </div>
                        <div className="col-lg-5 carousel-content-right">
                            <p className="testimoni">{props.testimoni}</p>
                            <p className="testimoniName">
                                {props.nama}, <span>{props.umur}</span>
                            </p>
                            <p className="testimoniPekerjaan">{props.pekerjaan}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselContainer;
