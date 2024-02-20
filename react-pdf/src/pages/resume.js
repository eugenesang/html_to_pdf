import React from 'react';
const Resume = () => {
    return (<main>
        <aside>
            <div className="image-container">
                <img src="/assets/eugene.jpg" alt="Eugene Sang Logo" />
            </div>
            <div className="description">
                <p className="title">ABOUT ME</p>
                <p className="txt">
                    Solution-driven Web Developer adept at contributing to highly
                    collaborative work environment, finding solutions and determining
                    customer satisfaction. Proven experience developing consumer focused
                    websites using HTML, CSS, Node-JS and JavaScript. Built products for
                    desktop and mobile app users over 3.5+ years, meeting highest standards
                    for web design, user experience, best practices and speed. Designed and
                    developed web applications across multiple APIs, third-party
                    integrations and databases.
                </p>
            </div>
            <hr />
            <div className="languages">
                <div className="title">
                    <p>LANGUAGES</p>
                </div>
                <div className="content">
                    <div className="language">
                        <p>English</p>
                        <progress value={95} max={100} />
                    </div>
                    <div className="language">
                        <p>Kiswahili</p>
                        <progress value={100} max={100} />
                    </div>
                </div>
            </div>
            <hr />
            <div className="links">
                <div className="title">
                    <p>LINKS</p>
                </div>
                <div className="content">
                    <div className="link">
                        <div className="link-desc">
                            <p>GitHub</p>
                        </div>
                        <div className="link-url">
                            <a href="https://github.com/eugenesang">github.com/eugenesang</a>
                        </div>
                    </div>
                    <div className="link">
                        <div className="link-desc">
                            <p>LinkedIn</p>
                        </div>
                        <div className="link-url">
                            <a href="https://linkedin.com/in/eugenesang">
                                linkedin.com/in/eugenesang
                            </a>
                        </div>
                    </div>
                    <div className="link">
                        <div className="link-desc">
                            <p>Portfolio</p>
                        </div>
                        <div className="link-url">
                            <a href="https://eugene-sang.web.app">eugene-sang.web.app</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="logo-container">
                <div className="logo">
                    <img src="/assets/eugene.svg" alt="Eugene Sang logo" />
                </div>
                <div className="punch-line">
                    <p>Dreams coded real</p>
                </div>
            </div>
        </aside>
        <section id="content">
            <header>
                <div className="left">
                    <div className="name">
                        <span className="first-name">Eugene</span>
                        <span className="sur-name">Sang</span>
                    </div>
                    <div className="occupation">
                        <span>FULL STACK DEVELOPER</span>
                    </div>
                </div>
                <div className="right">
                    <div className="u-info">
                        <div className="icon">
                            <i className="fas fa-location-dot" />
                        </div>
                        <div className="desc">
                            <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                    <div className="u-info">
                        <div className="icon">
                            <i className="fas fa-envelope" />
                        </div>
                        <div className="desc">
                            <p>
                                <a href="mailto:eugeneksang@gmail.com">eugeneksang@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="u-info">
                        <div className="icon">
                            <i className="fas fa-phone" />
                        </div>
                        <div className="desc">
                            <p>
                                <a href="tel:+254718925969">+254 718 925 969</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <div id="work-experience" className="list-container">
                <h1 className="list-title">Work Experience</h1>
                <div className="work-experience-container list-table">
                    <div className="work-experience list-row">
                        <div className="left">
                            <div className="job-employer title">Trusted Advisers Realty</div>
                            <div className="job-location">Edmonton - Canada</div>
                            <div className="job-date">Present</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">
                                Fullstack Web Developer (Remote)
                            </div>
                            <div className="tasks">
                                <ul>
                                    <li>CTO and Fullstack developer</li>
                                    <li>Oversaw development and maintenance of live realty site</li>
                                    <li>
                                        Implemented technologies for dynamic, responsive functionality
                                    </li>
                                    <li>
                                        Led creation of in-house automation software for efficiency
                                    </li>
                                    <li>
                                        Managed remote work effectively from Kenya for a Canadian
                                        company
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-experience list-row">
                        <div className="left">
                            <div className="job-employer title">WorkHub Writers</div>
                            <div className="job-location">Nairobi - Kenya</div>
                            <div className="job-date">Feb 2023 - present</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">Fullstack Web Developer</div>
                            <div className="tasks">
                                <ul>
                                    <li>
                                        Served as CTO, led website design and user needs analysis
                                    </li>
                                    <li>Built website using HTML, CSS, AJAX, and React</li>
                                    <li>
                                        Managed back-end operations using NodeJS, MongoDB, Express
                                    </li>
                                    <li>Incorporated payment system using PayPal, M-Pesa APIs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-experience list-row">
                        <div className="left">
                            <div className="job-employer title">Stockisha</div>
                            <div className="job-location">Nairobi - Kenya</div>
                            <div className="job-date">May 2023 - Aug 2023</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">Backend Developer</div>
                            <div className="tasks">
                                <ul>
                                    <li>Spearheaded user-focused designs at Stockisha.com</li>
                                    <li>
                                        Exploited HTML, CSS, JavaScript, AJAX, JSON, React for smooth
                                        functionality
                                    </li>
                                    <li>Boosted operations and security via NodeJS, MongoDB</li>
                                    <li>
                                        Optimized payment flow with M-Pesa, PayPal API integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-experience list-row">
                        <div className="left">
                            <div className="job-employer title">Top Essay Inc.</div>
                            <div className="job-location">Nairobi - Kenya</div>
                            <div className="job-date">Dec 2021 - May 2022</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">Fullstack Web Developer</div>
                            <div className="tasks">
                                <ul>
                                    <li>
                                        Transformed mockups into engaging web presence with HTML,
                                        JavaScript, AJAX
                                    </li>
                                    <li>
                                        Engineered server and API endpoints using Node.js for site
                                        functionality
                                    </li>
                                    <li>
                                        Integrated Flutter wave payment system for superior user
                                        convenience
                                    </li>
                                    <li>
                                        Effectively juggled front-end development and database
                                        administration duties
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="education" className="list-container">
                <h1 className="list-title">EDUCATION</h1>
                <div className="list-table">
                    <div className="list-row">
                        <div className="left">
                            <div className="job-employer title">
                                South Eastern Kenya University
                            </div>
                            <div className="job-location">Kitui - Kenya</div>
                            <div className="job-date">Sep 2019 - Aug 2023</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">
                                Bachelor of Science - Education
                            </div>
                            <div className="tasks">
                                <ul>
                                    <li>Majored in Mathematics and Physics</li>
                                    <li>
                                        Excelled in rigorous tests to earn Bsc. Maths &amp; Physics
                                    </li>
                                    <li>
                                        Joined tech communities to practice my teaching, problem
                                        solving and software engineering skills
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="job-employer title">
                                Bartolimo Boys' High School
                            </div>
                            <div className="job-location">Baringo - Kenya</div>
                            <div className="job-date">Feb 2015 - Nov 2018</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">Kenya Secondary Education</div>
                            <div className="tasks">
                                <ul>
                                    <li>Excelled in Mathematics, Sciences and Computer studies</li>
                                    <li>Exceeded the minimum requirement to join University</li>
                                    <li>
                                        Awarded the Kenya Certificate of Secondary education by the
                                        Kenya National Examination Council
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="job-employer title">
                                Bishop Muge Academy - Kamogoiwo
                            </div>
                            <div className="job-location">Nandi - Kenya</div>
                            <div className="job-date">2007 - Nov 2014</div>
                        </div>
                        <div className="right">
                            <div className="job-title title">Kenya Primary Education</div>
                            <div className="tasks">
                                <ul>
                                    <li>
                                        Awarded the Kenya Certificate of Primary Education by the
                                        Kenya National Examination Council
                                    </li>
                                    <li>
                                        Got enough marks required to join a National level Secondary
                                        school
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projects" className="list-container">
                <h1 className="list-title">PROJECTS</h1>
                <div className="list-table">
                    <div className="list-row">
                        <div className="left">
                            <div className="title">Harambee Manager</div>
                        </div>
                        <div className="right">
                            <div className="title">Fund Raising Management App</div>
                            <div>
                                <p>Node.js, Express, Google APIs, React, Next.js, MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="title">Edmonton Real Estate Experts</div>
                        </div>
                        <div className="right">
                            <div className="title">Real Estate Website</div>
                            <div>
                                <p>Node.js, express, MySql, HTML, JavaScript, CSS, EJS,</p>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="title">WorkHub Writers</div>
                        </div>
                        <div className="right">
                            <div className="title">Freelance Writing Platform</div>
                            <div>
                                <p>Node.js, express, MongoDB, HTML, JavaScript, CSS, EJS,</p>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="title">Top Essay Inc</div>
                        </div>
                        <div className="right">
                            <div className="title">Freelance Writer's Landing Page</div>
                            <div>
                                <p>Node.js, express, MongoDB, HTML, JavaScript, CSS, React</p>
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="left">
                            <div className="title">KV Market</div>
                        </div>
                        <div className="right">
                            <div className="title">Local Town's Marketplace</div>
                            <div>
                                <p>Node.js, express, MySql, HTML, JavaScript, CSS, EJS,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills">
                <h1 className="title">SKILLS</h1>
                <div className="skills-container">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>PostgresSql</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Firebase</li>
                    <li>APIs</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Figma</li>
                    <li>Postman</li>
                    <li>Docker</li>
                    <li>Stripe</li>
                    <li>PayPal</li>
                    <li>M-Pesa</li>
                    <li>VsCode</li>
                    <li>SEO</li>
                    <li>Web Apps</li>
                    <li>Responsive Web Design</li>
                    <li>AI</li>
                    <li>Auth</li>
                    <li>Payment Processing</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>C#</li>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Resume;