import React from "react";
import qs from "qs";

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const detail = query.detail === "true";

    return (
        <div>
            <h1>About</h1>
            <p>This project is to practice the basics of react router.</p>
            {detail && <p>Additional information provided by query value.</p>}
        </div>
    );
};

export default About;
