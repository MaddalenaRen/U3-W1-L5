import React from "react";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid d-flex align-items-center justify-content-between px-0">
        <style>{`
                    @media (max-width: 768px) {
                    #logoNetflix {
                    width: 50% !important;
                            }
                        }
                    `}</style>
        <img
          src={logo}
          alt="logo-Netflix"
          style={{ height: "100px" }}
          className="img-fluid w-25 d-block d-md-inline order-0"
          id="logoNetflix"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-controls="navbarNav"
        />

        <div className="nav-item order-lg-3">
          <Link to="/profilo">
            <img
              src={avatar}
              alt="User Profilo"
              className="rounded-circle ms-3 mb-2 me-5"
              width="40"
              height="40"
            />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center text-center text-md-start order-lg-1">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/TvShows">
                TvShows
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Recently
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                My List
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex flex-row justify-content-center order-lg-2">
            <li className="nav-item">
              <i className="fas fa-search text-white ms-3 mb-2"></i>
            </li>
            <li className="nav-item">
              <i className="fas fa-bell text-white ms-3 mb-2"></i>
            </li>
            <li className="nav-item">
              <i className="fas fa-child text-white ms-3 mb-2"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
