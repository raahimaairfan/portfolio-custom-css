import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">Portfolio</h1>
                <ul className="navbar-links">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
