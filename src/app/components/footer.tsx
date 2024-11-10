import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved by Raahima Irfan.</p>
            </div>
        </footer>
    );
};

export default Footer;
