(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/concentricThumbnail.17925d0d.jpg"},43:function(e,t,n){e.exports=n(98)},48:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(36),i=n.n(r),s=(n(48),n(6)),l=n(9),c=n(18),m=n(16),d=n(19),u=n(10),h=n.n(u),p=n(100),g=n(101),w=n(99),f=n(3),b=function(e){var t=e.stylingClass,n=o.a.useRef,a=o.a.useEffect,r=n(null);return a(function(){var e,t=r.current.clientWidth,n=r.current.clientHeight,a=new f.i({antialias:!0});a.setClearColor(16777215),a.setSize(t,n);var o=new f.h,i=new f.f(75,t/n,.1,1e3);i.position.z=22;var s=new f.a(16777215,.5);o.add(s);var l=new f.g(16363519,.5);l.position.set(15,10,10),o.add(l);var c=new f.b(25,3,3),m=new f.e({wireframe:!0,wireframeLinewidth:3,color:4539717}),d=new f.d(c,m);d.rotation.x+=1.4,o.add(d);var u=new f.d(c,m);u.rotation.y+=1.4,o.add(u);var h=new f.d(c,m);h.rotation.z+=1.4,o.add(h);var p=function t(){d.rotation.x+=.01,d.rotation.y+=.02,d.rotation.z+=.03,u.rotation.x+=.03,u.rotation.y+=.01,u.rotation.z+=.02,h.rotation.x+=.02,h.rotation.y+=.03,h.rotation.z+=.01,a.render(o,i),e=window.requestAnimationFrame(t)};return r.current.appendChild(a.domElement),e||(e=window.requestAnimationFrame(p)),function(){window.cancelAnimationFrame(e),e=null,o.remove(d),c.dispose(),m.dispoase()}},[]),o.a.createElement("div",{className:t,ref:r})},y=function(e){var t=e.stylingClass,n=o.a.useRef,a=o.a.useEffect,r=n(null);return a(function(){var e,t=r.current.clientWidth,n=r.current.clientHeight,a=new f.i({antialias:!0});a.setClearColor(16777215),a.setSize(t,n);var o=new f.h,i=new f.f(75,t/n,.1,1e3);i.position.z=43;var s=new f.a(16777215,.5);o.add(s);var l=new f.g(16363519,.5);l.position.set(15,10,10),o.add(l);var c=new f.c(25),m=new f.e({wireframe:!0,wireframeLinewidth:3,color:4539717}),d=new f.d(c,m);d.rotation.x+=1.4,o.add(d);var u=function t(){d.rotation.x+=.01,d.rotation.y+=.02,d.rotation.z+=.03,a.render(o,i),e=window.requestAnimationFrame(t)};return r.current.appendChild(a.domElement),e||(e=window.requestAnimationFrame(u)),function(){window.cancelAnimationFrame(e),e=null,o.remove(d),c.dispose(),m.dispoase()}},[]),o.a.createElement("div",{className:t,ref:r})},v=n(39),x=n.n(v),E=h()({navItem:{marginBottom:15},gridWrapper:{display:"grid",width:"100%",transform:"rotate(-12deg)",maxWidth:"1500px",marginTop:"100px",marginLeft:"-60px",gridTemplate:"0.2fr 1fr 0.2fr 1fr 1fr / 1fr 1fr 1fr 1fr",gridGap:"15px"},header:{gridColumn:"2 / 3",gridRow:"1 / 2"},navBar:{gridColumn:"2 / 3",gridRow:"2 / 3"},about:{gridColumn:"3 / 5",gridRow:"2 / 3"},taste:{gridColumn:"3 / 5",gridRow:"3 / 4"},concentricImg:{gridColumn:"4/5",gridRow:"4 / 5",height:"250px","& img":{height:"100%"}},concentricContent:{gridColumn:"2/4",gridRow:"4/5",textAlign:"right"},concentricInfo:{gridColumn:"1/2",gridRow:"4/5",transform:"rotate(90deg)"},ursulaContent:{textAlign:"right",gridColumn:"1/3",gridRow:"5/6"},ursulaInfo:{gridColumn:"4/5",gridRow:"5/6",alignSelf:"end",height:"100%"},ursulaSample:{gridColumn:"3/4",gridRow:"5/6"},"@media (max-width: 940px)":{gridWrapper:{transform:"none"}}})(function(e){var t=e.classes;return a.createElement("div",{className:t.gridWrapper},a.createElement("h1",{className:t.header},"Santiago Quintana"),a.createElement(y,{stylingClass:t.navBar}),a.createElement("div",{className:t.about},a.createElement("p",null,"Queer dancer tech witch musician working in whatever medium I can get my hands on."),a.createElement("p",null,"I am based in Chicago, IL where I work as a consultant software developer at Table XI. Outside of work I play with electronic music, machine learning, electronics, dance improvisation, installation art, and all the intersections thereof. I want to explore the possibility of self-knowledge through technology, using technologies enhance our capacity for connection.")),a.createElement("h1",{className:t.taste},"some projects"),a.createElement("div",{className:t.concentricImg},a.createElement(w.a,{to:"/concentric"}," ",a.createElement("img",{src:x.a,alt:"concentric thumbnail"}))),a.createElement("div",{className:t.concentricContent},a.createElement("h3",null,"Concentric"),a.createElement("p",null,"A performance/workshop intended to be an experiential introduction to dance improvisation. It is around 45 minutes long and consists of three explorations that build and support each other, culminating in 10-15 munites of free improv."),a.createElement("p",null,"The workshop is a string of uninterrupted, continuous movement. It's inspired in the work and language of Bartenieff and Laban. The music score was produced in collaboration with Steven Jackson, who plays live with us.")),a.createElement("div",{className:t.concentricInfo},a.createElement("p",null,"Initial workshops happened May 2019 in Chicago at OuterSpace studios and Comfort Station as part of the ",a.createElement("a",{href:"https://comfortstationlogansquare.org/calendar/2019/5/19/comfort-society-presents-concentric"},"Comfort Society Program"))),a.createElement("div",{className:t.ursulaContent},a.createElement("h3",null,"Ursula"),a.createElement("p",null,"A work in progress. Using Igor Babushkin's ",a.createElement("a",{href:"https://github.com/ibab/tensorflow-wavenet/"},"tensorflow implementation of WaveNet")," I am creating algorithmically generated audio based on recordings of my own voice."),a.createElement("p",null,"I am not necessarily interested in generating human passing audio. I am exploring machine learning as its own medium with the limitations and imperfections that give it an aesthetic dimension."),a.createElement("p",null,a.createElement(w.a,{to:"/ursula"},"Read More..."))),a.createElement("div",{className:t.ursulaSample},a.createElement("iframe",{title:"ursula sample",width:"100%",height:"300",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641998821&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"})),a.createElement(b,{stylingClass:t.ursulaInfo}))}),C=n(4),k=n.n(C),A=function(){function e(){var t=this;Object(s.a)(this,e),this.SCALE=["C4","D4","F4","G4","A4","C5","D5","F5","G5","A5"],this.step=0,this.start=function(){return t.loop.start(0)},this.stop=function(){return t.loop.stop()},this.playArp=function(){t.synth.triggerAttackRelease(t.SCALE[t.step%10],"16n"),t.step++},this.synth=new k.a.Synth({oscillator:{type:"sawtooth"},envelope:{attack:.1,decay:.1,sustain:.2,release:.9},volume:-4}),this.delay=new k.a.PingPongDelay(.25,.7),this.vibrato=new k.a.Vibrato("32n"),this.filter=new k.a.Filter(250,"lowpass"),this.loop=new k.a.Loop(this.playArp,"16n"),this.synth.chain(this.vibrato,this.filter,this.delay,k.a.Master)}return Object(l.a)(e,[{key:"bpm",set:function(e){k.a.Transport.bpm.value=e}}]),e}(),S=function e(){var t=this;Object(s.a)(this,e),this.SCALE=["G2","G2","A1","A1"],this.step=0,this.start=function(){return t.loop.start()},this.stop=function(){return t.loop.stop()},this.playArp=function(){t.synth.triggerAttackRelease(t.SCALE[t.step%4],"1n"),t.step++},this.synth=new k.a.MonoSynth({oscillator:{type:"fatsawtooth",count:3,spread:40},envelope:{attack:.05,decay:0,susatain:1,release:.5},portamento:.2,volume:-4}),this.delay=new k.a.PingPongDelay(.25,.7),this.filter=new k.a.Filter(150,"lowpass"),this.loop=new k.a.Loop(this.playArp,"1n"),this.synth.chain(this.filter,k.a.Master)},L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={leadPlaying:!1,bassPlaying:!1,synth:null,bass:null},n.SCALE=["C4","D4","F4","G4","A4","C5","D5","F5","G5","A5"],n.step=0,n.toggleLead=function(){var e=n.state,t=e.leadPlaying,a=e.lead;t?a.stop():a.start(),n.setState({leadPlaying:!t})},n.toggleBass=function(){var e=n.state,t=e.bassPlaying,a=e.bass;t?a.stop():a.start(),n.setState({bassPlaying:!t})},n.anyPlaying=function(){return n.state.leadPlaying||n.state.bassPlaying},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({lead:new A,bass:new S}),k.a.Transport.start()}},{key:"render",value:function(){var e=this.props.classes;return a.createElement("div",{onDragOver:function(e){return console.log(e)},className:"".concat(e.wrapper," ").concat(this.anyPlaying()?e.wrapperParty:null)},a.createElement("h1",null,"landscapes"),a.createElement("div",{draggable:!0,className:"".concat(e.knob," ").concat(e.topLeftKnob," ").concat(this.state.leadPlaying?e.knobParty:null),onClick:this.toggleLead},a.createElement("p",{className:e.knobLabel},"wind")),a.createElement("div",{draggable:!0,className:"".concat(e.knob," ").concat(e.topRightKnob," ").concat(this.state.bassPlaying?e.knobParty:null),onClick:this.toggleBass},a.createElement("p",{className:e.knobLabel},"ground")),a.createElement("div",{draggable:!0,className:"".concat(e.knob," ").concat(e.bottomRightKnob)},a.createElement("p",{className:e.knobLabel},"rain")),a.createElement("div",{draggable:!0,className:"".concat(e.knob," ").concat(e.bottomLeftKnob)},a.createElement("p",{className:e.knobLabel},"sun")))}},{key:"componentWillUnmount",value:function(){k.a.Transport.stop()}}]),t}(a.Component),I=h()({"@keyframes colorchange":{"0%":{backgroundColor:"rgb(0, 255, 255)"},"33%":{backgroundColor:"rgb(255, 255, 0)"},"66%":{backgroundColor:"rgb(255, 0, 255)"},"100%":{backgroundColor:"rgb(0, 255, 255)"}},"@keyframes textColorchange":{"0%":{color:"rgb(255, 255, 0)",textShadow:"rgb(255, 255, 0)"},"33%":{color:"rgb(255, 0, 255)",textShadow:"rgb(255, 255, 0)"},"66%":{color:"rgb(0, 255, 255)",textShadow:"rgb(255, 0, 255)"},"100%":{color:"rgb(255, 255, 0)",textShadow:"rgb(0, 255, 255)"}},"@keyframes shadowColorchange":{"0%":{boxShadow:"10px 10px rgb(255, 0, 255)"},"33%":{boxShadow:"10px 10px rgb(0, 255, 255)"},"66%":{boxShadow:"10px 10px rgb(255, 255, 0)"},"100%":{boxShadow:"10px 10px rgb(255, 0, 255)"}},wrapper:{margin:0,paddingTop:30,height:"100vh",width:"100vw",minWidth:"400px",transition:"text-shadow 0.5s ease-in-out",textAlign:"center"},wrapperParty:{backgroundColor:"cyan",animation:"colorchange 10s infinite",textShadow:"10px 10px yellow",animationDelay:"0.5s","& h1":{color:"magenta",animation:"textColorchange 10s infinite",animationDelay:"0.5s"}},knob:{margin:10,borderRadius:"100%",backgroundColor:"black",width:"70px",height:"70px",display:"flex",alignItems:"center",justifyContent:"center",transition:"box-shadow 0.5s ease-in-out","&:first-child":{marginLeft:0}},knobParty:{boxShadow:"13px 13px magenta",animation:"shadowColorchange 10s infinite",animationDelay:"0.5s"},knobLabel:{color:"white"},topLeftKnob:{position:"fixed",top:0,left:0},topRightKnob:{position:"fixed",top:0,right:0},bottomRightKnob:{position:"fixed",bottom:0,right:0},bottomLeftKnob:{position:"fixed",bottom:0,left:0}})(L),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(p.a,null,o.a.createElement("main",{className:e.global},o.a.createElement(g.a,{path:"/",exact:!0,component:E}),o.a.createElement(g.a,{path:"/arp-ambient",component:I})))}}]),t}(a.Component),P=h()({global:{fontFamily:"'Fira Mono', monospace","& p":{margin:0,marginBottom:14,lineHeight:"1.5em",fontWeight:"400"},"& h1, h2":{fontWeight:"700"}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.0db35a68.chunk.js.map