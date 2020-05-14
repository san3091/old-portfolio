# the origin story

Finding myself with time and resources is unusual. I had six weeks away from my job as a web developer surrounded by dancers and musicians and a vibrant creative environment. Inspired by the work of [Mario Klingemann](https://twitter.com/quasimondo) and [Helena Sarin](https://twitter.com/glagolista) after seeing them speak at Eyeo Festival in Milwaukee, I decided to deep dive into machine learning as a medium for creative expression. The journey began with [MIT 6.S191](https://youtu.be/5v1JnYv_yWs) and experimenting with the newly released public beta for [Runway ML](https://runwayml.com/) and [Magenta](https://magenta.tensorflow.org/). Furious notetaking and tutorial watching led to the discovery of [ibab/tensorflow-wavenet](https://github.com/ibab/tensorflow-wavenet/) and my decision to use ibab's work as my gateway into agorithmically generated sound.

I recorded ten minues of myself singing only vowels in a fixed pentatonic scale. Then split that clip into roughly a hundred smaller clips and gleefully began the training and left the room to fix myself a congratulatory cup of tea. Minutes later my computer was the hottest it had ever been, `top` revealed `python3` pushing my cpu usage to a mindboggling 600%. I stopped the process and thought maybe I had a usable trained model after only fifteen minutes of pushing my macbook to the edge of its capacity. The checkpoint produced had undergone about 150 steps and yielded only white noise when I generated one second (16000 samples) of audio.

_insert white noise from first ursula model_

Back to the drawing board. I needed more resources. I spun up a `t2.2xlarge` EC2 instance and requested access to a `p3.2xlarge` instance to use the `Deep Learning Ubuntu AMI`. It took the program 150 hours (6.25 days) to reach 21,800 steps and tensorboard was showing diminishing returns in terms of lowering loss. I stopped it and generated several short samples. For the first time I heard what sounded eerily similar in quality and tone to my voice glitched out and sung back at me in some variation of the scale I had used initially. This was when a friend suggested Ursula, the sexy octopus sea witch who collects voices, as the name for my cyborg friend.

_insert ursula progression_

At this point I got this email:

_insert email screenshot_

I got to work immediately. After my first pass I decided I wanted to train the next model using vowels _and_ consonants, but still adhering to a scale. I read my favorite passage from Virginia Woolf's _To the Lighthouse_ while singing in a set scale. I chopped this up into around 120 samples and spun up a `p3.2xlarge`, puzzled my way through setting up the AMI and starting the training process while motitorin the GPU with `nvidia-smi`. I detached from the `tmux` session and closed the ssh connection and sat around nervously. I had no idea what to expect and fixed myself dinner, checking in periodically. I was floored when 24 hours later, coming back exhausted from my last dance class of the day, I saw the model had reached 99,999 steps and stopped the training. I had set up a script that would dowload checkpoints along the way. I wanted to keep snapshots of the process so I could hear how the algorithm evolved.

_insert progression of virginia_

Now it's time to pull those into Ableton and start the next phase of the exploration, this time in a much more familiar territory. While that is happening I'm exploring CycleGAN and pix2pix as tools for potentially generating video using a series of dance clips as a source. We'll see how that turns out!
