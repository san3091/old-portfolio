import React, { Component } from 'react';
import injectSheet from "react-jss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GridExperiments from './GridExperiments';
import Home from './Home';
import Synth from './Synth';

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <main className={classes.global}>
          <Route path="/" exact component={Home} />
          <Route path="/arp-ambient" component={Synth} />
          <Route path="/grid-experiments" component={GridExperiments} />
        </main>
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
    }
  },
}

export default injectSheet(style)(App);
