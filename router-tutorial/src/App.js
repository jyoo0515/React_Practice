import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Link, Switch } from "react-router-dom";
import Profiles from "./components/Profiles";
import HistorySample from "./components/HistorySample";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profiles">Profile List</Link>
                </li>
                <li>
                    <Link to="/history">History Example</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profiles/" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
