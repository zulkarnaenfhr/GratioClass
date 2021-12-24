import React, { Component } from "react";
import CarouselContainer from "./Carousel-Container";
import "./GratioClass-Homepage-Section5.css";

export default class GratioClassHomepageSection5 extends Component {
    render() {
        return (
            <div id="sectionHomepage5">
                <div className="container">
                    <div className="sectionHomepage5-container">
                        <h1 className="sectionHomepage5-Title">
                            What They Say
                            <br />
                            About Us ?
                        </h1>
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <CarouselContainer
                                    addClass="active"
                                    imgSrc="https://i.ibb.co/zs6tnnt/Trisia.jpg"
                                    testimoni="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate in animi corrupti non, dolor doloremque obcaecati totam quo veniam accusamus."
                                    nama="Trisia Jo"
                                    umur="21"
                                    pekerjaan="UI / UX Designer"
                                />
                                <CarouselContainer
                                    addClass=""
                                    imgSrc="https://i.ibb.co/HxQDY3w/Maman.png"
                                    testimoni="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate in animi corrupti non, dolor doloremque obcaecati totam quo veniam accusamus."
                                    nama="Maman"
                                    umur="24"
                                    pekerjaan="Graphic Designer"
                                />
                                <CarouselContainer
                                    addClass=""
                                    imgSrc="https://i.ibb.co/xDh0387/Windy.jpg"
                                    testimoni="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate in animi corrupti non, dolor doloremque obcaecati totam quo veniam accusamus."
                                    nama="Windy"
                                    umur="22"
                                    pekerjaan="Motion Graphic"
                                />
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
