import React, { Component } from 'react'
import injectSheet from "react-jss"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import Home from './Home'
import Ursula from "./Ursula"

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <ScrollToTop>
          <main className={classes.global}>
            <div className={classes.gridWrapper}>
              <Route path="/" exact component={Home} />
              <Route path="/ursula" component={Ursula} />
            </div>
          </main>
        </ScrollToTop>
      </Router>
    );
  }
}

const style = {
  global: {
    fontFamily: "'Fira Mono', monospace",

    "& p": {
      margin: 0,
      marginBottom: 14,
      lineHeight: "1.5em",
      fontWeight: "400"
    },

    "& h1, h2": {
      fontWeight: "700"
    },

    "& code": {
      backgroundColor: "#ebebeb",
    }

  },
  gridWrapper: {
    display: "grid",
    width: "100%",
    transform: "rotate(-12deg)",
    maxWidth: "1500px",
    marginTop: "100px",
    marginLeft: "-60px",
    gridTemplate: "0.2fr 1fr 0.2fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr",
    gridGap: "15px",
  },
 "@media (max-width: 940px)": {
    gridWrapper: {
      transform: "none",
    }
  }
}
export default injectSheet(style)(App);
