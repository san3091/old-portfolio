import * as React from "react"
import injectSheet from "react-jss"
import Octopus from "./Octopus"
import { Link } from "react-router-dom"

const Ursula = ({ classes }) => (
  <>
    <Link to="/" className={classes.backLink}><p>&#60; home</p></Link>
    <h1 className={classes.header}>Ursula</h1>
    <Octopus stylingClass={classes.octopus}/>
    <div className={classes.intro}>
      <p>
        Finding myself with time and resources is unusual. I had six weeks away from my job as a web developer surrounded by dancers and musicians and a vibrant creative environment. Inspired by the work of <a href="https://twitter.com/quasimondo">Mario Klingemann</a> and <a href="https://twitter.com/glagolista">Helena Sarin</a> after seeing them speak at Eyeo Festival in Milwaukee, I decided to deep dive into machine learning as a medium for creative expression. The journey began with <a href="https://youtu.be/5v1JnYv_yWs">MIT 6.S191</a> and experimenting with the newly released public beta for <a href="https://runwayml.com/">Runway ML</a> and <a href="https://magenta.tensorflow.org/">Magenta</a>. Furious notetaking and tutorial watching led to the discovery of <a href="https://github.com/ibab/tensorflow-wavenet/">ibab/tensorflow-wavenet</a> and my decision to use ibab's work as my gateway into agorithmically generated sound.
      </p>
    </div>
    <div className={classes.sampleOne}>
      <p>(Pretty much just white noise)</p>
      <iframe title="ursulaSampleOne" width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643486758&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div className={classes.progress}>
      <p>
        I recorded ten minues of myself singing only vowels in a fixed pentatonic scale. Then split that clip into roughly a hundred smaller clips and gleefully began the training and left the room to fix myself a congratulatory cup of tea. Minutes later my computer was the hottest it had ever been, <code>top</code> revealed <code>python3</code> pushing my cpu usage to a mindboggling 600%. I stopped the process and thought maybe I had a usable trained model after only fifteen minutes of pushing my macbook to the edge of its capacity. The checkpoint produced had only 27 steps and yielded only white noise when I generated one second (16000 samples) of audio.
      </p>
    </div>
    <div className={classes.success}>
      <p>
        Back to the drawing board. I needed more resources. I spun up a <code>t2.2xlarge</code> EC2 instance and requested access to a <code>p3.2xlarge</code> instance to use the <code>Deep Learning Ubuntu AMI</code>. It took the program 150 hours (6.25 days) to reach 21,800 steps and tensorboard was showing diminishing returns in terms of lowering loss. I stopped it and generated several short samples. For the first time I heard what sounded eerily similar in quality and tone to my voice glitched out and sung back at me in some variation of the scale I had used initially. This was when a friend suggested Ursula, the sexy octopus sea witch who collects voices, as the name for my cyborg friend.

      </p>
    </div>
    <div className={classes.samples}>
      <iframe title="ursulaSampleTwo" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643487409&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe title="ursulaSampleThree" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643487931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe title="ursulaSampleFour" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643491696&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div className={classes.email}>
      <p>
        At this point I got an email authorizing me to use a GPU <code>p3.2xlarge</code> instance!!
      </p>
    </div>
    <div className={classes.virginia}>
      <p>
        After my first pass I decided I wanted to train the next model using vowels <i>and</i> consonants, but still adhering to a scale. I read my favorite passage from Virginia Woolf's <i>To the Lighthouse</i> while singing in a set scale. I chopped this up into around 120 samples and spun up a <code>p3.2xlarge</code>, puzzled my way through setting up the AMI and starting the training process while motitorin the GPU with <code>nvidia-smi</code>. I had no idea what to expect and fixed myself dinner, checking in periodically. I was floored when 24 hours later, coming back exhausted from my last dance class of the day, I saw the model had reached 99,999 steps and stopped the training. I had set up a script that would dowload checkpoints along the way. I wanted to keep snapshots of the process so I could hear how the algorithm evolved. Here's the result:
      </p>
    </div>
    <div className={classes.virginiaSamples}>
      <iframe title="virginiaSampleOne" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643509531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe title="virginiaSampleTwo" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643510362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe title="virginiaSampleThree" width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643510995&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div className={classes.finally}>
      <p>
        Finally I generated some longer samples:
      </p>
    </div>
    <div className={classes.longSampleOne}>
      <iframe title="virginiaLong1" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643511625&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div className={classes.longSampleTwo}>
      <iframe title="virginiaLong2" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641998821&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div className={classes.explore}>
      <p>
        I'll pull those into Ableton and start the next phase of the exploration in more familiar territory. While that is happening I'm exploring CycleGAN and pix2pix as tools for potentially generating video using a series of dance clips as a source...
      </p>
    </div>
  </>
)

const style = {
  octopus: {
    height: "100%",
    width: "100%",
  },
  "@media (min-width: 1000px)": {
    backLink: {
      gridColumn: "1/2",
      gridRow: "1/2",
      textAlign: "right",
      alignSelf: "center"
    },
    header: {
      gridColumn: "2/3",
      gridRow: "1/2",
    },
    octopus: {
      gridColumn: "4/5",
      gridRow: "1/3",
      height: "100%",
    },
    intro: {
      gridColumn: "2/4",
      gridRow: "2/3"
    },
    progress: {
      gridColumn: "2/5",
      gridRow: "3/4"
    },
    sampleOne: {
      gridColumn:"1/2",
      gridRow: "3/4",
      transform: "rotate(90deg)",
      justifySelf: "end",
    },
    success: {
      gridColumn: "3/5",
      gridRow: "4/6",
    },
    samples: {
      gridColumn: "2/3",
      gridRow: "4/5",
    },
    email: {
      gridColumn: "1/2",
      gridRow: "5/6",
      width: "160px",
      justifySelf: "end",
      textAlign: "right"
    },
    virginia: {
      gridColumn: "2/4",
      gridRow: "5/7",
    },
    virginiaSamples: {
      gridColumn: "4/5",
      gridRow: "5/7"
    },
    finally: {
      gridColumn: "1/2",
      gridRow: "6/7",
      textAlign: "right"
    },
    longSampleOne: {
      gridColumn: "2/3",
      gridRow: "6/7",
    },
    longSampleTwo: {
      gridColumn: "3/4",
      gridRow: "6/7"
    },
    explore: {
      gridColumn: "4/5",
      gridRow: "6/7",
    }
  }
}

export default injectSheet(style)(Ursula)
