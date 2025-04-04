import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

const Footer = () => {
    return (
        <footer className="bg-black text-center text-md-start text-secondary py-4 mt-auto">
            <div className="container">
                {/* Sezione icone visibile sempre */}
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <a href="#" className="text-secondary fs-4"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-secondary fs-4"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-secondary fs-4"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="text-secondary fs-4"><i className="bi bi-youtube"></i></a>
                </div>

                {/* Le colonne dei link visibili solo da md in su */}
                <div className="row justify-content-center d-none d-md-flex my-5">
                    <div className="col-8 col-sm-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-secondary text-decoration-none">Audio and Subtitles</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Media Center</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Privacy</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-8 col-sm-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-secondary text-decoration-none">Audio Description</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Investor Relations</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className="col-8 col-sm-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-secondary text-decoration-none">Help Center</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Jobs</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Cookie Preferences</a></li>
                        </ul>
                    </div>
                    <div className="col-8 col-sm-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-secondary text-decoration-none">Gift Cards</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Terms of Use</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Corporate Information</a></li>
                        </ul>
                    </div>

                </div>

                {/* Service Code e copyright sempre visibili */}
                <div className="text-center mt-3">
                    <button className="btn btn-outline-secondary btn-sm">Service Code</button>
                    <p className="mt-2">&copy; {new Date().getFullYear()} Netflix Clone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;