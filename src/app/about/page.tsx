import './about.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">
                    About Me
                </h1>
                <p className="about-description">
                    Hi, I am Raahima Irfan, a passionate software developer specializing in full-stack development, AI/ML, and data science. 
                    I create innovative solutions that help businesses grow, streamline processes, and stay ahead in the digital age.
                </p>

                {/* Mission Section */}
                <div className="section mission">
                    <h2 className="section-title">
                        My Mission
                    </h2>
                    <p className="section-text">
                        My mission is to build high-quality, scalable software solutions that make a difference in peoples lives. 
                        I aim to constantly improve my skills, contribute to impactful projects, and stay at the forefront of technology trends.
                    </p>
                    <p className="section-text">
                        Whether its through coding, developing AI models, or solving complex problems, my goal is always to deliver value 
                        and drive positive change in the world of technology.
                    </p>
                </div>

                {/* Skills & Expertise Section */}
                <div className="skills-expertise">
                    <div className="section">
                        <h2 className="section-title">
                            Skills & Expertise
                        </h2>
                        <ul className="skills-list">
                            <li className="skills-item">
                                Web Development (NextJS, Node.js)
                            </li>
                            <li className="skills-item">
                                Data Science & Machine Learning (Python, TensorFlow, Scikit-learn)
                            </li>
                            <li className="skills-item">
                                Frontend Development (HTML, CSS, JavaScript, Tailwind CSS)
                            </li>
                        </ul>
                    </div>

                    {/* Technologies I Use */}
                    <div className="section">
                        <h2 className="section-title">
                            Technologies I Use
                        </h2>
                        <div className="technologies">
                            <span className="tech-item">JavaScript</span>
                            <span className="tech-item">TypeScript</span>
                            <span className="tech-item">Node.js</span>
                            <span className="tech-item">Python</span>
                            <span className="tech-item">TensorFlow</span>
                            <span className="tech-item">Tailwind CSS</span>
                            <span className="tech-item">HTML</span>
                            <span className="tech-item">CSS</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="section values">
                    <h2 className="section-title">
                        My Core Values
                    </h2>
                    <ul className="values-list">
                        <li className="value-item">
                            Innovation – Continuously evolving to create modern solutions.
                        </li>
                        <li className="value-item">
                            Integrity – Transparent and ethical in all work and relationships.
                        </li>
                        <li className="value-item">
                            Collaboration – Working together to achieve the best outcomes.
                        </li>
                        <li className="value-item">
                            Excellence – Delivering high-quality results that exceed expectations.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
