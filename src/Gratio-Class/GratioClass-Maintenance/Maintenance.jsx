import React, { Component } from "react";
import "./Maintenance.css"

export default class Maintenance extends Component {
    render() {
        return (
            <div id="Maintenance">
                <div class="Maintenance-container">
                    <div class="what-is-up">
                        <div class="spinny-cogs">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                            <i class="fa fa-5x fa-cog fa-spin" aria-hidden="true"></i>
                            <i class="fa fa-3x fa-cog" aria-hidden="true"></i>
                        </div>
                        <h1 class="What-Maintenance">Under Maintenance</h1>
                        <h2>Our developers are hard at work updating your system. Please wait while we do this. We have also made the spinning cogs to distract you.</h2>
                    </div>
                </div>
            </div>
        );
    }
}
