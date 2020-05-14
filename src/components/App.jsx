import React, { Component } from 'react'
import injectSheet from "react-jss"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ScrollToTop from "./ScrollToTop"
import Home from './Home'
import Ursula from "./Ursula"

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <Route render={({ location }) => (
          <ScrollToTop>
            <main className={classes.global}>
                <TransitionGroup>
                  <CSSTransition
                    timeout={300}
                    key={location.key}
                    unmountOnExit
                    classNames={{
                      enter: classes.fadeEnter,
                      enterActive: classes.fadeEnterActive,
                      exit: classes.fadeExit,
                      exitActive: classes.fadeExitActive
                    }}>
                      <div className={classes.gridWrapper}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/ursula" component={Ursula} />
                      </div>
                  </CSSTransition>
                </TransitionGroup>
            </main>
          </ScrollToTop>
        )} />
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
    padding: "0 20px",

    "& > div": {
      margin: "20px auto",
    }
  },

  fadeEnter: {
    opacity: 0
    // color: "red"
  },

  fadeEnterActive: {
    opacity: 1,
    transition: "opacity 1000ms"
    // color: "blue",
    // transition: "color 100ms"
  },

  fadeExit: {
    opacity: 1
    // color: "blue"
  },

  fadeExitActive: {
    opacity: 0,
    // color: "red",
    transition: "opacity 1000ms"
  },

  "@media (min-width: 1000px)": {
    gridWrapper: {
      display: "grid",
      width: "100%",
      transform: "rotate(-12deg)",
      maxWidth: "1500px",
      marginTop: "100px",
      gridTemplate: "0.2fr 1fr 0.2fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr",
      gridGap: "15px",
    },
  }
}
export default injectSheet(style)(App);
