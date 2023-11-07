import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
        <title>Home</title>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
        {/* Fonts (google font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap Stylesheet */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Magnific-popup stylesheet */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        {/* Owl Carousel stylesheet */}
        <link rel="stylesheet" href="css/owl.carousel.css" />
        {/* Owl theme stylesheet */}
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        {/* Animated headline stylesheet */}
        <link rel="stylesheet" href="css/jquery.animatedheadline.css" />
        {/* MeanMenu stylesheet */}
        <link rel="stylesheet" href="css/meanmenu.min.css" />
        {/* Imgal stylesheet */}
        <link rel="stylesheet" href="css/imgal.min.css" />
        {/* font awesome stylesheet */}
        <link rel="stylesheet" href="css/all.min.css" />
        {/* AOS stylesheet */}
        <link rel="stylesheet" href="css/aos.css" />
        {/* Normalize CSS */}
        <link rel="stylesheet" href="css/normalize.css" />
        {/* Main stylesheet */}
        <link rel="stylesheet" href="css/style.css" />
        {/* Responsive stylesheet */}
        <link rel="stylesheet" href="css/responsive.css" />
        <header className="bg-white header">
          {/* mobile header nav */}
          <div className="mobile-menu d-block d-md-none">
            <nav>
              <ul className="menu">
                <li>
                  <Link className="menu-link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="menu-link" to="/projects">Projects</Link>
                </li>
                <li>
                  <Link className="menu-link" to="/experiences">Experiences</Link>
                </li>
                <li>
                  <Link className="menu-link" to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="mailto:aniksaha859@gmail.com">Contact</Link>
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
                      <Link className="menu-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/projects">
                        Projects
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/experiences">
                        Experiences
                      </Link>
                    </li>
                    <li className="px-2 px-lg-3 ">
                      <Link className="menu-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* header button */}
              <div className="header-btn-wrapper">
                <a className="btn orange-btn btn_effect">
                  <Link to="mailto:aniksaha859@gmail.com">
                    <span className="z-1 position-relative">contact</span>
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
