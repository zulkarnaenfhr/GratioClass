import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import GratioClassClass from "./GratioClass-Class/GratioClass-Class";
import Event from "./GratioClass-Event/GratioClass-Event";
import HomePage from "./GratioClass-Homepage/GratioClass-Homepage";
import Showcase from "./GratioClass-Showcase/GratioClass-Showcase";
import "./Gratio-Class.css";

export default class GratioClass extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom navbar navbar-dark">
                    <div class="container">
                        <a class="GratioBrand" href="#">
                            Gratio Class
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbarCollapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Class">Class</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Showcase">Showcase</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Event">Event</Link>
                                </li>
                                <li class="nav-item"></li>
                                <li class="nav-profile">
                                    <a class="nav-link active" aria-current="page" href="">
                                        <img src="https://i.ibb.co/99V2HSv/anime-rascal-does-not-dream-of-bunny-girl-senpai-blue-eyes-grey-hair-mai-sakurajima-hd-wallpaper-pre.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Class" element={<GratioClassClass />} />
                    <Route path="/Showcase" element={<Showcase />} />
                    <Route path="/Event" element={<Event />} />
                </Routes>
            </div>
        );
    }
}
