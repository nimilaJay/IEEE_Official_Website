import React from "react";
import "./navigator.css";
import { Link } from "react-router-dom";


const Navigator = () => {
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar" role="banner">
        <div style={{ backgroundColor: "#078282" }} className="px-3">
          <div className="align-items-center justify-content-between d-flex">
            <div className="d-none d-xl-block  ">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <Link to="/home">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="has-children">
                    <a href="about.html">
                      <span>
                        About Us <i class="fa-solid fa-caret-down mx-2"></i>
                      </span>{" "}
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <Link to="/about">History</Link>
                      </li>
                      <li className="has-children">
                        <Link to="/about">Executive Committee 2022/23</Link>
                      </li>
                      <li className="has-children">
                        <Link to="/about">IEEE</Link>
                      </li>
                      <li className="has-children">
                        <Link to="/about">Benefits</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/login">
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <a href="/">
                      <span>Events</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>Downloads</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>Community</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle text-white"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigator;
