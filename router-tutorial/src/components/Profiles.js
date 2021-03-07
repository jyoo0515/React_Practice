import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    return (
        <div>
            <h3>User List:</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/jyoo"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        jyoo
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/gildong"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        gildong
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>Select a user.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    );
};

export default Profiles;
