import {useState} from "react";
import { Link } from "react-router-dom"
import { ExternalLink } from "react-external-link";
import "../Styles/Navbar.css";

function Navbar() {
    return (
        <header>
            <h1>Haik Shougarian</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Project</Link>
                    </li>
                    <li>
                        <ExternalLink href="https://github.com/shougarianh">GitHub</ExternalLink>
                    </li>
                    <li>
                        <ExternalLink href="https://www.linkedin.com/in/haik-shougarian-743228190/">LinkedIn</ExternalLink>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar