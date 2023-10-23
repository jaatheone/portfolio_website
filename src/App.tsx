// Dependencies
import React from "react";
import {
  CheckCircleFill,
  MortarboardFill,
  Wrench,
  FlagFill,
  RocketTakeoffFill
} from "react-bootstrap-icons";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="bg-green-200">
      <Intro />
      <Projects />
      <Skills />
      <Education />
      <WorkExperience />
      <Footer />
    </div>
  );
};

function Intro(): JSX.Element {
  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center w-4/5 mx-auto p-1 px-2"
    >
      <div className="flex flex-col mr-8 w-3/5">
        <div className="text-4xl font-bold mb-2">
          Hi, I'm
          <span className="text-green-600">Anzhelika</span>
        </div>
        <div className="text-2xl mb-3">
          Full Stack Developer with knowledge in JS.
        </div>
        <div className="text-lg">
          <span className="font-bold">Email: </span>
          <a
            href="mailto:akurnikova@usf.edu"
            className="underline text-green-600 hover:text-blue-700"
          >
            akurnikova@usf.edu
          </a>
        </div>
        <div className="text-lg">
          <span className="font-bold">Linkedin: </span>
          <a
            href="https://linkedin.com/anzhelika-kurnikova"
            className="underline text-green-600 hover:text-blue-700"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="w-2/5 max-w-xs">
        <img src="headshot.jpg" className="w-full" />
      </div>
    </div>
  );
}

function Projects(): JSX.Element {
  const projects = [
    {
      name: "Python Snake Game",
      description:
        "Snake game in which a snake eats apples and is controlled by a hand gesture.",
      skills: ["Python", "OpenCV", "CVZone"]
    },
    {
      name: "IoT Project",
      description:
        "IoT project allows electricity in a room to be turned on when a clap sound is made.",
      skills: ["C", "C++"]
    },
    {
      name: "How to build a computer",
      description: "Tutorial about making a computer yourself.",
      skills: ["Hardware", "Binary numbers"]
    }
  ];
  return (
    <div className="bg-green-100 w-full" id="projects">
      <div className="py-10 px-2 mx-auto w-3/5">
        <div className="text-3xl text-green-600 font-bold mb-3 flex flex-row items-center">
          Projects
          <FlagFill className="ml-3" />
        </div>
        <div className="grid grid-cols-2 gap-x-8">
          {projects.map((project) => (
            <div className="w-50 h-50 shadow-md mb-5 flex flex-col p-5 bg-white rounded-md">
              <div className="text-xl font-bold mb-3">{project.name}</div>
              <div className="mb-2 text-base">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills(): JSX.Element {
  const skillsProgramming = ["C", "C++", "Python", "JavaScript"];
  const skillsWebDevelopment = ["HTML", "CSS", "React.js", "TailWindCSS"];
  const skillsTools = ["Docker", "Git"];

  return (
    <div className="w-full" id="skills">
      Skills
    </div>
  );
}

function Education(): JSX.Element {
  return (
    <div className="bg-green-100 w-full" id="education">
      <div className="py-10 px-2 mx-auto w-3/5">
        <div className="text-3xl flex flex-row items-center text-green-600 font-bold mb-3">
          Education
          <MortarboardFill className="ml-2" />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-3/5">
            <div className="font-bold">University of South Florida</div>
            <div>Computer Science Major</div>
            <div>Expected: May 2026</div>
          </div>
          <div className="w-2/5">
            <span className="font-bold">Activities:</span>
            IEEE-CS, Some other student group
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkExperience(): JSX.Element {
  const experiences = [
    {
      company: "USF",
      role: "Duck Developer Intern",
      dates: ["May 2022", "August 2023"],
      bulletpoints: [
        "assisted in managing a team of 20 ducks in a pond",
        "developed cryptocurrency app for ducks to trade duck coin",
        "worked closely with geese to teach ducks how  to swim"
      ]
    },
    {
      company: "Ducks College",
      role: "Duck Software Engineer",
      dates: ["May 2021", "August 2022"],
      bulletpoints: [
        "developed Duck Portal to assist in records processing",
        "developed system to track attendance"
      ]
    }
  ];

  return (
    <div className="w-full" id="work">
      Work Experience
    </div>
  );
}

function Footer(): JSX.Element {
  const tabs = ["Home", "Projects", "Skills", "Education", "Work"];
  return (
    <div className="bg-green-600 w-full text-white font-bold">
      <div className="py-5 px-2 mx-auto w-3/5 flex flex-row justify-center">
        <div>
          {tabs.map((tab) => (
            <button className="mr-5 hover:text-green-200">{tab}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
