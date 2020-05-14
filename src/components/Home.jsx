import * as React from "react"
import injectSheet from "react-jss"
import { Link } from "react-router-dom"
import RotatingBox from "./RotatingBox"
import JigglingPolyhedron from "./JigglingPolyhedron"
import concentricThumbnail from "../assets/concentricThumbnail.jpg"

const Home = ({ classes }) => (
  <>
    <h1 className={classes.header}>Santiago Quintana</h1>
    <JigglingPolyhedron stylingClass={classes.navBar}/>
    <div className={classes.about}>
      <p>Queer dancer tech witch musician working in whatever medium I can get my hands on.</p>
      <p>I am based in Chicago, IL where I work as a consultant software developer at Table XI.</p>
      <p>Outside of work I play with electronic music, machine learning, electronics, improvisation of all kinds, installation art, and all the intersections thereof.</p>
      {/* <hr /> */}
      <p>
        Follow my work on on&nbsp;
        <a href="https://www.instagram.com/santiago_mvmt/">instagram</a>,&nbsp;
        <a href="https://vimeo.com/user97130733">vimeo</a>, and&nbsp;
        <a href="https://soundcloud.com/user-255736465">soundcloud</a>&nbsp;
      </p>
      <p>contact@santiagoqg.com</p>
    </div>
    <h1 className={classes.taste}>what i'm up to</h1>
    <div className={classes.adf}>
      <h3>ADF Summer Dance Intensive</h3>
      <p>This summer I took time away from software engineering to jumpstart my creative projects and surround myself with dance. I had the absolute pleasure of taking Gaga, Countertechnique, and Creative Process.</p>
      <p>At the end of the five weeks I showed three small projects developed during the intensive:</p>
      <p>A solo choreographed using techniques and priciples learned in Noa Zuk and Ohad Fishof's Creative Process class, a quartet exploring learning (machine and otherwise), and a trio in which my movement became translated into music by infrared sensors and an Arduino Uno. These three pieces put to use my experience in electronics and machine learning, as well as the tools developed in the various classes.</p>
      <a href="https://vimeo.com/showcase/6180646">Take a look!</a>
    </div>
    <div className={classes.concentricContent}>
      <h3>Concentric</h3>
      <p>A performance/workshop intended to be an experiential introduction to dance improvisation. It is around 45 minutes long and consists of three explorations that propose tools and entries into movement exploration..</p>
      <p>The workshop is a string of uninterrupted, continuous movement. It's inspired in the work and language of Bartenieff and Laban. The music score was produced in collaboration with Steven Jackson, who plays live with us.</p>
    </div>
    <div className={classes.concentricInfo}>
      <p>Initial workshops happened May 2019 in Chicago at OuterSpace studios and Comfort Station as part of the <a href="https://comfortstationlogansquare.org/calendar/2019/5/19/comfort-society-presents-concentric">Comfort Society Program</a></p>
    </div>
    <div className={classes.concentricImg}>
      <Link to="/concentric"> <img src={concentricThumbnail} alt="concentric thumbnail"/></Link>
    </div>
    <div className={classes.ursulaContent}>
      <Link to="/ursula"><h3>Ursula</h3></Link>
      <p>A work in progress. Using Igor Babushkin's <a href="https://github.com/ibab/tensorflow-wavenet/">tensorflow implementation of WaveNet</a> I am creating algorithmically generated audio based on recordings of my own voice.</p>
      <p>I am not necessarily interested in generating human passing audio. I am exploring machine learning as its own medium with the limitations and imperfections that give it an aesthetic dimension.</p>
      <p><Link to="/ursula">Read More...</Link></p>
    </div>
    <div className={classes.ursulaSample}>
      <iframe title="ursula sample" width="100%" height="300" loading="lazy" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641998821&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <RotatingBox stylingClass={classes.boxAnimation}/>
  </>
)

const style ={
  concentricImg: {
    height: "250px",
    "& img": {
      height: "100%",
    }
  },

  navBar: {
    height: "200px",
    width: "100%",
  },

  boxAnimation: {
    height: "300px",
    width: "100%",
  },

  "@media (min-width: 1000px)": {
    header: {
      gridColumn: "3 / 4",
      gridRow: "1 / 2",
    },
    navBar: {
      gridColumn: "2 / 3",
      gridRow: "1 / 3",
      height: "70%",
    },
    about: {
      gridColumn: "3 / 5",
      gridRow: "2 / 3",
    },
    taste: {
      gridColumn: "3 / 5",
      gridRow: "3 / 4",
    },
    adf: {
      gridColumn: "2/5",
      gridRow: "4/5",
      // textAlign: "right"
    },
    concentricImg: {
      gridColumn: "4/5",
      gridRow: "5/6",
    },
    concentricContent: {
      gridColumn: "2/4",
      gridRow: "5/6",
      textAlign: "right",
    },
    concentricInfo: {
      alignSelf: "center",
      gridColumn: "1/2",
      gridRow: "5/6",
      transform: "rotate(90deg)",
    },
    ursulaContent: {
      textAlign: "right",
      gridColumn: "1/3",
      gridRow: "6/7",
    },
    boxAnimation: {
      gridColumn: "4/5",
      gridRow: "6/7",
      alignSelf: "end",
      height: "100%",
    },
    ursulaSample: {
      gridColumn: "3/4",
      gridRow: "6/7",
    },
  },
}

export default injectSheet(style)(Home)
