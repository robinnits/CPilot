import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-left">

                    <div className="footer-title">
                        Built by
                    </div>

                    <div className="footer-name">
                        Robin Poddar
                    </div>

                    <div className="footer-links">
                        <a
                            href="https://github.com/robinnits"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <span>•</span>

                        <a
                            href="https://www.linkedin.com/in/robinpoddar07/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>

                <div className="footer-right">

                    <div className="footer-title">
                        Contact
                    </div>

                    <a
                        href="mailto:robinpoddar2003@gmail.com"
                        className="footer-email"
                    >
                        robinpoddar2003@gmail.com
                    </a>

                </div>

            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                © 2026 CPilot • v1.0.0
            </div>

        </footer>
    );
}

export default Footer;