import React, { useState } from "react";
import avatar from '../assets/avatar.png';

const Profilo = () => {

    const [language, setLanguage] = useState('Inglese');
    const [autoplayNext, setAutoplayNext] = useState(true);
    const [autoplayPreviews, setAutoplayPreviews] = useState(true);


    const handleLanguageChange = (e) => setLanguage(e.target.value);


    const handleAutoplayNextChange = () => setAutoplayNext(!autoplayNext);
    const handleAutoplayPreviewsChange = () => setAutoplayPreviews(!autoplayPreviews);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-dark p-5 rounded">
                    <h2 className="text-white text-center mb-4 border-bottom border-2 border-dark-subtle">Edit Profile</h2>

                    <div className="row align-items-start">
                        <div className="col-md-4 text-center text-md-start mb-3 mb-md-0" style={{ position: 'relative' }} id="foto-profilo">
                            <img src={avatar} alt="Profilo utente" width="150" height="150" />
                            <i className="fas fa-edit" style={{ position: 'absolute', bottom: '10px', right: '75px', fontSize: '20px', color: '#fff' }}></i>
                        </div>

                        <div className="col-md-8">
                            <div className="p-2 mb-3 bg-secondary text-white rounded">
                                <h4 className="m-0">Strive Student</h4>
                            </div>

                            <div className="mb-4 py-4 border-bottom border-2 border-dark-subtle">
                                <label htmlFor="languageSelect" className="form-label fw-bold text-white">Language</label>
                                <select
                                    id="languageSelect"
                                    className="form-select bg-secondary text-white border-0"
                                    value={language}
                                    onChange={handleLanguageChange}
                                >
                                    <option value="Inglese">Inglese</option>
                                    <option value="Italiano">Italiano</option>
                                    <option value="Spagnolo">Spagnolo</option>
                                    <option value="Francese">Francese</option>
                                </select>
                            </div>

                            <h4 className="text-white">Maturity Settings</h4>
                            <div className="p-2 bg-secondary text-white rounded mb-2">
                                <a href="./setting.html" className="text-white text-decoration-none d-block">
                                    ALL MATURITY RATINGS
                                </a>
                            </div>
                            <p className="text-white">Show titles of <span className="fw-bold">all maturity ratings</span> for this profile.</p>
                            <button type="button" className="btn btn-outline-light mb-4">EDIT</button>

                            <h5 className="text-white">Autoplay Controls</h5>
                            <div className="form-check text-white">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="autoplay1"
                                    checked={autoplayNext}
                                    onChange={handleAutoplayNextChange}
                                />
                                <label className="form-check-label" htmlFor="autoplay1">
                                    Autoplay next episode in a series on all devices
                                </label>
                            </div>
                            <div className="form-check text-white pb-2 border-bottom border-2 border-dark-subtle">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="autoplay2"
                                    checked={autoplayPreviews}
                                    onChange={handleAutoplayPreviewsChange}
                                />
                                <label className="form-check-label" htmlFor="autoplay2">
                                    Autoplay previews while browsing on all devices
                                </label>
                            </div>

                            <div className="d-flex mt-3 gap-3">
                                <button type="button" className="btn btn-light">SAVE</button>
                                <button type="button" className="btn btn-outline-light">CANCEL</button>
                                <div id="liveAlertPlaceholder"></div>
                                <button type="button" className="btn btn-outline-danger" id="liveAlertBtn">DELETE PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default Profilo;