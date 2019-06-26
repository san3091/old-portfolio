import * as React from "react"
import injectStyles from "react-jss"

const SynthKnob = ({containerClasses, labelClasses})=> (
  <div draggable className={`${containerClasses.knob} ${containerClasses.topLeftKnob} ${this.state.leadPlaying ? containerClasses.knobParty : null}`}
    onClick={this.toggleSynth}>
    <p className={labelClasses.knobLabel}>wind</p>
  </div>
)


const styles = {
  knob: {
    margin: 10,
    borderRadius: "100%",
    backgroundColor: "black",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "box-shadow 0.5s ease-in-out",

    "&:first-child": {
      marginLeft: 0
    }
  },
  knobParty: {
    boxShadow: "13px 13px magenta",
    animation: "shadowColorchange 10s infinite",
    animationDelay: "0.5s",
  },
  knobLabel: {
    color: "white",
  },
  topLeftKnob: {
    position: "fixed",
    top: 0,
    left: 0
  },
  topRightKnob: {
    position: "fixed",
    top: 0,
    right: 0,
  },
  bottomRightKnob: {
    position: "fixed",
    bottom: 0,
    right: 0,
  },
  bottomLeftKnob: {
    position: "fixed",
    bottom: 0,
    left: 0,
  }
}

export default injectStyles(styles)(SynthKnob)
