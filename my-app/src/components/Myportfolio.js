import React from 'react'
import './Myportfolio.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Myportfolio = () => {
    return (
        <div className='main-container'>
            <div className='left-container'>

                <img src='my profile.jpg' className='image' />

                <ol className='list-items'>
                    <a href='#about'><li>ABOUT</li></a>
                    <a href='#experience'><li>EXPERIENCE</li></a>
                    <a href='#education'><li>EDUCATION</li></a>
                    <a href='#skills'><li>SKILLS</li></a>
                    <a href='#projects'><li>PROJECTS</li></a>
                </ol>
            </div>
            <div className='right-container'>
                <div className='about' >
                    <div id='about'>
                        <h1 className='profile-name'>SREEHARI<span className='profile-name-span'>BATA</span></h1>
                        <h6 className='personal-details'>105 NEWBUILDINGS, PRODDATUR, CUDDAPPAH- AP, +91 9581446481, <span className='email'>sreehari.bata@gmail.com</span></h6>
                        <p className='description'>
                            Highly motivated and detail-oriented Front-End Developer with 1.5 years of experience in
                            creating responsive and dynamic web applications. Proficient in HTML5, CSS, JavaScript,
                            ReactJS, and TypeScript. Seeking to leverage my skills and experience to contribute to a fastpaced and innovative development team
                        </p>
                    </div>
                    <div>
                        <FaLinkedin className='icons' />
                        <FaGithub className='icons' />
                        <FaTwitterSquare className='icons' />
                        <FaFacebookSquare className='icons' />
                    </div>
                </div>
                <div className='experience'>
                    <h2 id="experience">EXPERIENCE</h2>
                    <div className='experience-details'>
                        <div>
                            <h3>FRONT - END - DEVELOPER
                            </h3>
                            <h5>INSTEDIA SOLLUTIONS</h5>
                        </div>
                        <p className='date'>May 2024 - July 2024</p>
                    </div>
                    <p className='experience-description'>Developed and maintained responsive web applications using HTML5, CSS3, Bootstrap, and
                        JavaScript.Collaborated with the design team to translate Figma prototypes into functional user
                        interfaces.Participated in daily stand-ups and contributed to sprint planning using Jira.Managed code versioning and repository branches using Git and GitHub.Improved website performance by optimizing images and lazy loading resources </p>
                    <div className='experience-details'>
                        <div>
                            <h3>JUNIOR FRONT-END--DEVELOPER</h3>
                            <h5>INFOSYS</h5>
                        </div>
                        <p className='date'>February 2022 - January 2023</p>
                    </div>
                    <p className='experience-description'>Assisted in developing user-friendly websites and web applications using HTML5, CSS3, and
                        JavaScript.Collaborated with senior developers to implement new features and fix bugs in existing
                        projects.Used ReactJS to create reusable components and manage application state effectively.Worked closely with QA teams to ensure cross-browser compatibility and responsiveness
                        across various devices</p>

                    {/* <div className='experience-details'>
                        <div>
                            <h3>Senior Web Developer</h3>
                            <h5>Intelitec Solutions</h5>
                        </div>
                        <p className='date'>March 2013 - Present</p>
                    </div>
                    <p className='experience-description'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                </div>
                <div className='eduaction' id='education'>
                    <h2 id='eduction'>EDUACTION</h2>
                    <div className='educatiaonal-details'>
                        <div>
                            <h3>VAAGDEVI INSTITITE OF TECHNOLOGY AND SCIENCE</h3>
                            <h5>BACHELOR OF TECHNOLOGY</h5>
                        </div>
                        <p className='date'>August 2018 - May 2021</p>
                    </div>
                    <div className='course-details'>
                        <p className='course'>ELECTRICAL AND ELECTRONICS ENGINEERING</p>
                        <p className='grade'>GPA: 6.5</p>
                    </div>
                    <div className='educatiaonal-details'>
                        <div>
                            <h3>GOVT.POLYTECHNIC COLLEGE</h3>
                            <h5>DIPLOMA</h5>
                        </div>
                        <p className='date'>August 2006 - May 2010</p>
                    </div>
                    <div className='course-details'>
                        <p className='course'>ELECTRICAL AND ELECTRONICS ENGINEERING</p>
                        <p className='grade'>GPA: 6.5</p>
                    </div>
                    <div className='educatiaonal-details'>
                        <div>
                            <h3>SECONDARY EDUCATION</h3>
                            <h5>GENERAL</h5>
                        </div>
                        <p className='date'>AugusT 2014 - May 2015</p>
                    </div>
                    <div className='course-details'>
                        <p className='grade'>GPA: 6.5</p>
                    </div>

                </div>
                <div className='skills' id='skills'>
                    <h2 id='skills'>SKILLS</h2>
                    <h5>Programming Languages & Tools</h5>
                    <div>
                        <DiJavascript className='icons' />
                        <FaCss3Alt className='icons' />
                        <TiHtml5 className='icons' />
                        <RiReactjsLine className='icons' />
                        <SiTypescript className='icons' />
                        <RiNextjsFill className='icons' />
                    </div>
                    <h5 className='work-flow'>Workflow</h5>
                    <ul>
                        <li>Mobile-First, Responsive Design</li>
                        <li>Cross Browser Testing & Debugging</li>
                        <li>Cross Functional Teams</li>
                        <li>Agile Development & Scrum
                        </li>
                    </ul>

                </div>
                <div className='projects'>
                    <h2 id='projects'>PROJECTS</h2>
                    <h3>PORTFOLIO</h3>
                    <h5 className='project'>DESCRIPTION :<span className='project-description'>Developed a personal portfolio website using ReactJS and TypeScript to showcase 
                    projects and skills. </span></h5>
                    <h3>e-commerce website</h3>
                    <h5 className='project'>DESCRIPTION :<span className='project-description'> Collaborated in a team to build a fully responsive e-commerce site. Implemented 
                    product pages, shopping cart functionality, and checkout process using ReactJS and Bootstrap.</span></h5>
                </div>
            </div>
        </div>

    )
}

export default Myportfolio
