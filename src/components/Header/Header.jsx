import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

  const HeaderTextSize = {
    fontWeight: "bold",
    fontSize: "20px"
  };

  return (
    <div>
      <>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        {/* Fonts (google font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
       
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/jquery.animatedheadline.css" />
        <link rel="stylesheet" href="css/meanmenu.min.css" />
        <link rel="stylesheet" href="css/imgal.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <header className="bg-white header">
          {/* mobile header nav */}
          <div className="mobile-menu d-block d-md-none">
            <nav>
              <ul className="menu">
                <li>
                  <Link className="menu-link" to="/" style={HeaderTextSize}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/projects" style={HeaderTextSize}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/experiences" style={HeaderTextSize}>
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/blog" style={HeaderTextSize}>
                    Blog & Publication
                  </Link>
                </li>
                <li>
                  <Link style={HeaderTextSize} to="mailto:aniksaha859@gmail.com">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="container d-none d-md-block">
            <div className="header-wrapper d-flex justify-content-between align-items-center">
              <div className="logo">
                {/* <a to="index.html">
                  <img src="img/Logo.png" alt="logo" />
                </a> */}
              </div>
              <div className="header-menu-wrapper main-menu">
                {/* nav menu */}
                <nav className="desktop-nav">
                  <ul className="header-menu d-flex flex-row justify-content-center menu">
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/" style={HeaderTextSize}>
                        Home
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/projects" style={HeaderTextSize}>
                        Projects
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/experiences" style={HeaderTextSize}>
                        Experiences
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/blog" style={HeaderTextSize}>
                      Blog & Publication
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* header button */}
              <div className="header-btn-wrapper">
                <a className="btn orange-btn btn_effect">
                  <Link to="mailto:aniksaha859@gmail.com">
                    <span className="z-1 position-relative" style={HeaderTextSize}>contact</span>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    </div>
  );
}
