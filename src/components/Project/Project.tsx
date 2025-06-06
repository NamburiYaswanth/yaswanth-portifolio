import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/NamburiYaswanth/MERN-TODO-APP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MERN ToDo: Task Management Application</h3>
              <p>
                Built a responsive task management application using the MERN
                stack (MongoDB, Express.js, React, Node.js), enabling users to
                create, read, update, and delete tasks. Implemented RESTful
                APIs, modular components, and state management for a seamless
                user experience with persistent data storage and real-time UI
                updates.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>REACT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ExpressJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/NamburiYaswanth/react-calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>React Calculator: Basic Arithmetic Calculator</h3>
              <p>
                Developed a user-friendly calculator using React to perform
                basic arithmetic operations such as addition, subtraction,
                multiplication, and division. Utilized React functional
                components, state hooks, and clean UI design to deliver a
                responsive and interactive experience across devices.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/NamburiYaswanth/sisoo-project"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sisoo: Job Portal with Profile Management</h3>
              <p>
                Designed and developed a job portal using the MERN stack where
                users can create and manage their profiles, upload resumes, and
                apply for jobs. Integrated role-based access for job seekers and
                recruiters, with features like job posting, profile editing, and
                secure authentication to ensure a smooth and professional hiring
                experience.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>Expressjs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
