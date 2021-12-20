import React, { Component } from "react";
import GratioClassHomepageSection1 from "./GratioClass-Homepage-Section1/GratioClass-Homepage-Section1";
import GratioClassHomepageSection2 from "./GratioClass-Homepage-Section2/GratioClass-Homepage-Section2";
import GratioClassHomepageSection3 from "./GratioClass-Homepage-Section3/GratioClass-Homepage-Section3";
import GratioClassHomepageSection4 from "./GratioClass-Homepage-Section4/GratioClass-Homepage-Section4";

class HomePage extends Component {
    render() {
        return (
            <div>
                <GratioClassHomepageSection1 />
                <GratioClassHomepageSection2 />
                <GratioClassHomepageSection3 />
                <GratioClassHomepageSection4 />
            </div>
        );
    }
}

export default HomePage;
