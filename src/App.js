import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Local Components */
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
    return (
        <div className="app">
            <Router>
                <Header></Header>
                <Route path="/" component={Home} />
                <Route path="/movie/:imdbID" component={MovieDetail} />
                <Route component={PageNotFound} />
                <Footer />
            </Router>
        </div>
    )
}
export default App;
