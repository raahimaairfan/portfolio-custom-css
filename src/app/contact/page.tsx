import './contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <div className="container">
                {/* Header Section */}
                <div className="header">
                    <h1 className="header-title">Contact Me</h1>
                    <p className="header-description">
                        I love to hear from you! Whether you have a question or simply want to connect, feel free to reach out below.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {/* Contact Form */}
                    <form className="contact-form">
                        <div className="input-group">
                            <label className="label" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="input"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="input-group">
                            <label className="label" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="input"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="input-group">
                            <label className="label" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                className="textarea"
                                placeholder="Write your message here"
                                rows={6}
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button className="submit-button">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2 className="contact-info-title">Get in Touch</h2>
                        <p className="contact-info-text">
                            If you have any questions or just want to say hello, feel free to reach out! I’m always open to new opportunities and collaborations.
                        </p>

                        <div className="contact-details">
                            <p><strong>Email:</strong> raahima1918@gmail.com</p>
                            <p><strong>Phone:</strong> +123 456 7890</p>
                            <p><strong>Location:</strong> City, Country</p>
                        </div>

                        <div className="footer-text">
                            <p>I look forward to hearing from you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
