import './App.css';
import Hero from './components/Hero/Hero';
import Specializations from './components/Specializations/Specializations';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Animation from './components/Animation/Animation';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    fetch('../functions/email.js')
      .then((res) => res.json())
      .then((json) => console.log(json));
    this.state = {
      hero: {
        title: 'Hello,',
        text: (
          <p>
            My name is Alex and this is my website. I am a{' '}
            <b>self-taught developer</b> excited by the problems and
            opportunities of the <b>modern web</b>. Take a look around. Let me
            know if you see anything you like. <b>Careful of the cubes.</b>
          </p>
        ),
      },
      spec: {
        items: [
          {
            icon_url: './imgs/waving_hand.svg',
            title: 'Who I am',
            text: (
              <div>
                <p>
                  I am a <b>self-taught developer</b> originally from Wisconsin
                  but living in San Diego since 2019. Before that I lived in
                  Massachusetts where I recieved a <b>B.A. in Communications</b>{' '}
                  from <b>Clark University</b>. Grateful to be somewhere warm
                  now.
                </p>
                <p>
                  My interests aside from my <b>love of programming</b> are
                  finding and making <b>weird music</b>, reading very{' '}
                  <b>dry books</b>, trying to get outside once in a while and{' '}
                  <b>talking to people</b> who are <b>much smarter</b> than me.
                </p>
              </div>
            ),
          },
          {
            icon_url: './imgs/auto_awesome.svg',
            title: 'What I do',
            text: (
              <ul>
                <li>
                  Write <b>tests</b>
                </li>
                <li>
                  Build <b>APIs</b>
                </li>
                <li>Code CSS from designs</li>
                <li>Write code for back end and front end</li>
                <li>
                  <b>Design sites</b> from scratch
                </li>
                <li>
                  Consistently <b>expand skillset</b>
                </li>
                <li>
                  Code <b>custom tooling</b>
                </li>
                <li>
                  Write clean and <b>maintainable code</b>
                </li>
                <li>
                  Work with <b>modern JS tooling</b>
                </li>
                <li>
                  Use <b>git/Github</b> for version control
                </li>
                <li>Use best practices</li>
              </ul>
            ),
          },
          {
            icon_url: './imgs/verified.svg',
            title: 'What I know',
            text: (
              <>
                <div>
                  <b>Frontend:</b>
                </div>
                <ul className="skills-list">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>Modern CSS</li>
                  <li>React.js</li>
                  <li>Sass</li>
                  <li>OAuth</li>
                </ul>
                <b>Backend:</b>
                <ul className="skills-list">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>SQL</li>
                </ul>
                <b>Tooling:</b>
                <ul className="skills-list">
                  <li>Git/Github</li>
                  <li>Figma Design and Prototyping</li>
                  <li>Jest</li>
                </ul>
                <b>Programming Concepts:</b>
                <ul className="skills-list">
                  <li>Algorithms and Data Structures</li>
                  <li>Testing</li>
                  <li>Agile Development</li>
                  <li>Networks</li>
                  <li>OOP</li>
                  <li>Authetication</li>
                </ul>
                <b>Other Languages:</b>
                <ul className="skills-list">
                  <li>TypeScript</li>
                  <li>Python</li>
                </ul>
              </>
            ),
          },
        ],
      },
      port: {
        port_title: 'Past Projects',
        projects: [
          {
            title: 'Hyporeal',
            img: './imgs/mockup_yellow_cropped.png',
            text: (
              <p>
                Hyporeal is a <b>Spotify visualizer</b> designed with the
                intention of improving on the existing Spotify visualizers I had
                seen by making a more dynamic, memorable and visually appealing
                experience done through the use of the Spotify <b>Web API</b>{' '}
                and <b>ThreeJS</b>.
              </p>
            ),
            side_class: 'port_item port_left',
          },
          {
            title: 'Game of Ur (with friends)',
            img: './imgs/mockup_yellow_cropped.png',
            text: (
              <p>
                Game of Ur (with friends) is{' '}
                <b>a real-time online multiplayer board game</b> written in{' '}
                <b>TypeScript</b> and based on a similar game played in
                Mesopotamia over 4000 years ago. A local multiplayer version was
                my mom's favorite project of mine so I created this version to
                allow us to play with her in Wisconsin and me in San Diego. It
                uses <b>Socket.io</b>, a real-time bi-directional communication
                library to share and update game state between players and the
                server written in <b>Node.js</b>
              </p>
            ),
            side_class: 'port_item port_right',
          },
          {
            title: 'Camera Obscura',
            img: './imgs/mockup_yellow_cropped.png',
            text: (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                nibh magna, condimentum non pulvinar nec, semper vel ipsum.
                Nulla facilisi. Suspendisse potent
              </p>
            ),
            side_class: 'port_item port_left',
          },
          {
            title: 'Project Title',
            img: './imgs/mockup_yellow_cropped.png',
            text: (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                nibh magna, condimentum non pulvinar nec, semper vel ipsum.
                Nulla facilisi. Suspendisse potent
              </p>
            ),
            side_class: 'port_item port_right',
          },
        ],
      },
      about_me: {
        title: 'Dev For Hire!',
        text: (
          <p>
            I am currently looking for my first full-time position in the tech
            industry as a full stack web developer. If anything you have seen
            here interests you or you would like to reach out, feel free to
            click below or check out my other links to see more info about me.
            Thanks for visiting!
          </p>
        ),
      },
      footer: {
        cta: 'Get in touch',
        social_icons: [
          {
            img: './imgs/GitHub-Mark-120px-plus.png',
            link: 'https://github.com/alex-davis-808',
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="App">
        <main>
          <canvas id="main_canvas"></canvas>
          <Hero hero={this.state.hero} />
          <Specializations spec={this.state.spec} />
          <Portfolio port={this.state.port} />
          <AboutMe about_me={this.state.about_me} />
          <Footer footer={this.state.footer} />
          <Animation />
        </main>
      </div>
    );
  }
}

export default App;
