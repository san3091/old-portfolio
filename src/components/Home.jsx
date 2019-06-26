import * as React from "react"
import injectSheet from "react-jss"
import { Link } from "react-router-dom"
import RotatingBox from "./RotatingBox"
import JigglingPolyhedron from "./JigglingPolyhedron"
import concentricThumbnail from "../assets/concentricThumbnail.jpg"

const Home = ({ classes }) => (
  <div className={classes.gridWrapper}>
    <h1 className={classes.header}>Santiago Quintana</h1>
    {/* <div className={classes.navBar}>
      <div className={classes.navItem}>
        <Link to="/ursula">Ursula; ML voice synthesis</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/arp-ambient">Musical landscapes in tone.js</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/concentric">Concentric</Link>
      </div>
    </div> */}
    <JigglingPolyhedron stylingClass={classes.navBar}/>
    <div className={classes.about}>
      <p>Queer dancer tech witch musician working in whatever medium I can get my hands on to craft experiences.</p>
      <p>I am based in Chicago, IL where I work as a consultant software developer at Table XI. Outside of work I play with electronic music, machine learning, electronics, dance improvisation, installation art, and all the intersections thereof. I want to explore the possibility of self-knowledge through technology, using technologies enhance our capacity for connection.</p>
    </div>
    <h1 className={classes.taste}>some projects</h1>
    <div className={classes.concentricImg}>
      <Link to="/concentric"> <img src={concentricThumbnail} alt="concentric thumbnail"/></Link>
    </div>
    <div className={classes.concentricContent}>
      <h3>Concentric</h3>
      <p>A performance/workshop intended to be an experiential introduction to dance improvisation. It is around 45 minutes long and consists of three explorations that build and support each other, culminating in 10-15 munites of free improv.</p>
      <p>The workshop is a string of uninterrupted, continuous movement. It's inspired in the work and language of Bartenieff and Laban. The music score was produced in collaboration with Steven Jackson, who plays live with us.</p>
    </div>
    <div className={classes.concentricInfo}>
      <p> <Link to="/concentric">Read More...</Link></p>
      <p>Initial workshops happened May 2019 in Chicago at OuterSpace studios and Comfort Station as part of the <a href="https://comfortstationlogansquare.org/calendar/2019/5/19/comfort-society-presents-concentric">Comfort Society Program</a></p>
    </div>
    <div className={classes.ursulaContent}>
      <h3>Ursula</h3>
      <p>A work in progress. Using Igor Babushkin's <a href="https://github.com/ibab/tensorflow-wavenet/">tensorflow implementation of WaveNet</a> I am creating algorithmically generated audio based on recordings of my own voice.</p>
      <p>I am not necessarily interested in generating human passing audio. I am exploring machine learning as its own medium with the limitations and imperfections that give it an aesthetic dimension.</p>
      <p><Link to="/ursula">Read More...</Link></p>
    </div>
    <div className={classes.ursulaSample}>
      <iframe title="ursula sample" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641998821&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
      <RotatingBox stylingClass={classes.ursulaInfo}/>
    {/* <div className={classes.ursulaInfo}>
      <p>This project will likely evolve into a multi-media dance/music performance/installation. But really anything can happen.</p>
    </div> */}
  </div>
)

const styles = {
  navItem: {
    marginBottom: 15,
  },
  gridWrapper: {
    display: "grid",
    width: "100%",
    transform: "rotate(-12deg)",
    maxWidth: "1500px",
    marginTop: "100px",
    marginLeft: "-60px",
    gridTemplate: "0.2fr 1fr 0.2fr 1fr 1fr / 1fr 1fr 1fr 1fr",
    gridGap: "15px",
  },
  header: {
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
  navBar: {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    // border: "1px solid black",
  },
  about: {
    gridColumn: "3 / 5",
    gridRow: "2 / 3",
  },
  taste: {
    gridColumn: "3 / 5",
    gridRow: "3 / 4",
  },
  concentricImg: {
    gridColumn: "1 / 2",
    gridRow: "4 / 5",
    justifySelf: "end",
    height: "250px",
    "& img": {
      height: "100%",
    }
  },
  concentricContent: {
    gridColumn: "2/4",
    gridRow: "4/5",
  },
  concentricInfo: {
    alignSelf: "end",
    gridColumn: "4/5",
    gridRow: "4/5",
    textAlign: "right",
  },
  ursulaContent: {
    textAlign: "right",
    gridColumn: "1/3",
    gridRow: "5/6",
  },
  ursulaInfo: {
    gridColumn: "4/5",
    gridRow: "5/6",
    alignSelf: "end",
    height: "100%",
  },
  ursulaSample: {
    gridColumn: "3/4",
    gridRow: "5/6",
  },
  "@media (max-width: 940px)": {
    gridWrapper: {
      transform: "none",
    }
  }
}

export default injectSheet(styles)(Home)
