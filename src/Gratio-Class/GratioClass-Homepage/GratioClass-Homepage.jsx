import React, { Component } from "react";
import GratioClassFooter from "../GratioClass-Footer/GratioClass-Footer";
import GratioClassHomepageSection1 from "./GratioClass-Homepage-Section1/GratioClass-Homepage-Section1";
import GratioClassHomepageSection2 from "./GratioClass-Homepage-Section2/GratioClass-Homepage-Section2";
import GratioClassHomepageSection3 from "./GratioClass-Homepage-Section3/GratioClass-Homepage-Section3";
import GratioClassHomepageSection4 from "./GratioClass-Homepage-Section4/GratioClass-Homepage-Section4";
import GratioClassHomepageSection5 from "./GratioClass-Homepage-Section5/GratioClass-Homepage-Section5";
import GratioClassHomepageSection6 from "./GratioClass-Homepage-Section6/GratioClass-Homepage-Section6";

class HomePage extends Component {
    render() {
        return (
            <div>
                <GratioClassHomepageSection1 />
                <GratioClassHomepageSection2 />
                <GratioClassHomepageSection3 />
                <GratioClassHomepageSection4 />
                {/* <GratioClassHomepageSection5 />
                <GratioClassHomepageSection6 />
                <GratioClassFooter /> */}
            </div>
        );
    }
}

export default HomePage;
