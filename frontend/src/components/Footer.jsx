import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <h2>CPilot</h2>

                    <p>
                        Analyze your performance.
                        Discover weaknesses.
                        Solve smarter.
                    </p>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-developer">

                    <h3>Built by</h3>

                    <p className="developer-name">
                        Robin Poddar
                    </p>

                    <p className="developer-college">
                        National Institute of Technology Silchar
                    </p>

                    <div className="footer-links">

                        <a
                            href="https://github.com/robinnits"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* <Globe size={18} /> */}
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* <Globe size={18} /> */}
                            LinkedIn
                        </a>

                        <a
                            href="https://codeforces.com/profile/robinpoddar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* <ExternalLink size={18} /> */}
                            Codeforces
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">
                    © 2026 CPilot • v1.0.0
                </div>

            </div>

        </footer>
    );
}

export default Footer;