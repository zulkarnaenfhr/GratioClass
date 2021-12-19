import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="GratioBrand" href="#">
                        Gratio Class
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Class
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    SnowCase
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Event
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    About Us
                                </a>
                            </li>
                            <li class="nav-profile">
                                <a class="nav-link active" aria-current="page" href="https://i.ibb.co/4Z62d4g/anime-rascal-does-not-dream-of-bunny-girl-senpai-blue-eyes-grey-hair-mai-sakurajima-hd-wallpaper-pre.jpg">
                                    <img src="https://i.ibb.co/4Z62d4g/anime-rascal-does-not-dream-of-bunny-girl-senpai-blue-eyes-grey-hair-mai-sakurajima-hd-wallpaper-pre.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src="" alt="" />
                </div>
            </nav>
        );
    }
}

export default Navbar;
