import Link from 'next/link';
import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="container mx-auto px-6 py-16">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <h1 className="welcome-title">Welcome to My Portfolio</h1>
                    <p className="welcome-description">
                        Hi, I am Raahima Irfan, a passionate developer with expertise in JavaScript, TypeScript, AI/ML, and web development. 
                        Explore my work and projects to learn more about my journey and skills.
                    </p>
                </div>

                {/* Feature Section */}
                <div className="feature-grid">
                    {/* Feature 1: Skills */}
                    <div className="feature-card">
                        <h2 className="feature-title">My Skills</h2>
                        <p className="feature-description">
                            I specialize in full-stack web development, AI/ML, and data analysis. From building interactive UIs with React to creating AI models in Python, I am always learning and applying new technologies.
                        </p>
                    </div>

                    {/* Feature 2: Projects */}
                    <div className="feature-card">
                        <h2 className="feature-title">My Projects</h2>
                        <p className="feature-description">
                            I have worked on several exciting projects including a Password Strength Checker in Java, a Chatbot in Java, and various data-driven web applications. Each project reflects my commitment to clean, efficient, and maintainable code.
                        </p>
                    </div>

                    {/* Feature 3: Experience */}
                    <div className="feature-card">
                        <h2 className="feature-title">Professional Experience</h2>
                        <p className="feature-description">
                            I have hands-on experience in data science and business intelligence, helping businesses harness the power of data to make informed decisions. My internship experiences have strengthened my ability to solve real-world problems.
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="cta-section">
                    <a href="https://github.com/raahimaairfan" className="cta-button">Explore My Work on GitHub</a></div>

            </div>
        </div>
    );
}
