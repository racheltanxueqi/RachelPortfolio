import * as React from "react"
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Timeline() {
    return (
        <div className="timeline_section">
            <div className="title">My Highlights</div>
                <div className="row">
                <div className="col-md-12">
                    <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                            <FontAwesomeIcon icon={faGraduationCap} style={{color: "white"}} />
                        </div>
                        <div className="timeline-label">
                            <h2>Bachelor of Computing (Hons) in Computer Science, <a className="company_location" href="https://www.comp.nus.edu.sg/programmes/ug/cs/">National University of Singapore</a> <span style={{float: "right"}}>Aug 2017 - May 2021</span></h2>
                            {/* <div class="timeline_description">
                            Designed all UI mockups of a business support web portal and iOS native mobile application with Sketch<br></br>
                            Developed a web portal with NextJS and Ant Design library to allow self-kiosk of COVID19 swabbing system for HPB<br></br>
                            Improved code quality with ESLint tool and Prettier formatter for all the microservices’ codebase</div> */}
                        </div>
                        </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                            <FontAwesomeIcon icon={faLaptopCode} style={{color: "white"}}/>
                        </div>
                        <div className="timeline-label">
                            <h2>Teaching Assistant, <a className="company_location" href="https://nusmods.com/modules/CS3203/software-engineering-project">CS3203 Software Engineer Project</a> <span style={{float: "right"}}>Jan 2021 - April 2021</span></h2>
                            <div class="timeline_description">
                            My job scope includes providing students with in-class tutorials, guide them on their design decisions on their software program designs which include front end component, algorithms, query processing and testing aspects. Evaluate and provide feedback on their progress.
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                            <FontAwesomeIcon icon={faLaptopCode} style={{color: "white"}}/>
                        </div>
                        <div className="timeline-label">
                            <h2>Part Time Web Developer / UIUX Designer, <a className="company_location" href="https://www.hpb.gov.sg/about/about-us">Health Promotion Board</a> <span style={{float: "right"}}>May 2020 - April 2021</span></h2>
                            <div class="timeline_description">
                            Designed all UI mockups of a business support web portal and iOS native mobile application with Sketch<br></br>
                            Developed a web portal with NextJS and Ant Design library to allow self-kiosk of COVID19 swabbing system for HPB<br></br>
                            Improved code quality with ESLint tool and Prettier formatter for all the microservices’ codebase</div>
                        </div>
                        </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                            <FontAwesomeIcon icon={faLaptopCode} style={{color: "white"}}/>
                        </div>
                        <div className="timeline-label">
                            <h2>Software Engineer Intern, <a className="company_location" href="https://www.hpb.gov.sg/about/about-us">Health Promotion Board</a> <span style={{float: "right"}}>May 2020 - Aug 2020</span></h2>
                            <div class="timeline_description">
                            Designed and developed a data analytic web page with PowerBI and D3js library for better visibility of swabbing performance<br></br>
                            Transformed a manual COVID19 swab registration procedure to a more efficient and portable procedure with the development<br></br>
                            of iOS native mobile application using Swift and later migrated it to React Native platform<br></br>
                            Wrote system test cases and performed automated testing with XCTest and Cucumberish for the mobile application
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                            <FontAwesomeIcon icon={faLaptopCode} style={{color: "white"}}/>
                        </div>
                        <div className="timeline-label">
                            <h2>Front End Developer Intern, <a className="company_location" href="https://www.dietlens.com/">NExT++ DietLens</a> <span style={{float: "right"}}>May 2019 - Aug 2020</span></h2>
                            <div class="timeline_description">
                            Developed a lifestyle mobile application that enables user to track food intake’s nutritional value<br></br>
                            Improved the Front End and UI designs with HTML, CSS, TypeScript on Wechat Programs<br></br>
                            Pre-process, train and validate model for food recognition with TensorFlow
                            </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                            <FontAwesomeIcon icon={faGraduationCap} style={{color: "white"}}/>
                        </div>
                        <div className="timeline-label">
                            <h2>Diploma in Biomedical Engineering, <a className="company_location" href="https://www.np.edu.sg/soe/Pages/bme.aspx">Ngee Ann Polytechnic</a> <span style={{float: "right"}}>May 2019 - Aug 2020</span></h2>
                            {/* <div class="timeline_description">I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</div> */}
                        </div>
                        </div>
                    </article>
                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                        <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none">
                        </div>
                        </div>
                    </article>
                    
                    </div>
                </div>
                </div>
            </div>
    )

}

export default Timeline;