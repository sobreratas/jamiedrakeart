import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Verse.css";

const Verse = () => {
    //SCROLL TO TOP FUNCTIONALITY
    function scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    }
  
    //GET YEAR FOR FOOTER
    const currentYear = new Date().getFullYear();
  
    //SIDEBAR FUNCTIONALITY
    function openSideBar() {
      sidemenu.style.right = "0";
    }
  
    function closeSideBar() {
      sidemenu.style.right = "-200px";
    }

  return (
    <>
      <div id="verse-body">
        <div id="verse" className="verse-header">
          <div className="container">
            <nav>
              <Link to="/" className="home-logo">
                <h1>Jamie Drake Art</h1>
              </Link>
              <ul id="sidemenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
                <li>
                  <Link to="/music">Music</Link>
                </li>
                <li>
                  <Link to="/the-murmurations">The Murmurations</Link>
                </li>
                <li>
                  <Link to="/fiction">Fiction</Link>
                </li>
                <li>
                  <Link to="/verse">Verse</Link>
                </li>
                <FontAwesomeIcon
                  className="fa-solid fa-xmark"
                  icon="xmark"
                  onClick={closeSideBar}
                />
                <i className="fa-solid fa-xmark"></i>
              </ul>
              <FontAwesomeIcon
                className="fa-solid fa-bars"
                icon="bars"
                onClick={openSideBar}
              />
            </nav>

            <Link to="#" className="go-top-btn" onClick={scrollToTop}>
              <FontAwesomeIcon
                className="fa-solid fa-arrow-up"
                icon="arrow-up"
              />
            </Link>
        
          </div>
        </div>

        <div className="verse-container">
        <h1>Verse</h1>
        <div className="verse-box-container">
            <div className="verse-box-container-row-1">
                <div className="verse-box-container-row-1-col-1">
                    <img src="images/verse/know-me-and-remember.png" className="book-cover" alt="Know Me and Remember" />
                </div>
                <div className="verse-box-container-row-1-col-2">
                    <p><strong><i>Know Me and Remember </i>(2020) </strong>is the first volume of my collected poems and song lyrics, covering the period from the 1990s through 2019.</p>
                    <div className="verse-btns-container">
                        <a href="https://www.lulu.com/shop/jamie-drake/know-me-and-remember/hardcover/product-1gqye957.html?q=know+me+and+remember&page=1&pageSize=4"
                            target="_blank"><img src="images/verse/lulu-logo.png" className="verse-btn" /></a>
                        <a href="https://drive.google.com/file/d/1BD3aHDWRblXCeK_NItCOqCnvTqYgLN2V/view"
                            target="_blank"><img src="images/verse/drive-logo.png" className="verse-btn" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="copyright">
          <div className="social-icons">
            <a
              href="https://open.spotify.com/artist/7wKJurl3H6c5X0ihRcitk3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              href="https://music.apple.com/us/artist/the-murmurations/1181216683"
              target="_blank"
            >
              <FontAwesomeIcon icon={faApple} />
            </a>
            <a
              href="https://www.youtube.com/@themurmurations1534"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <p>
            &#169; Copyright Jamie Drake {currentYear}. All rights reserved.
          </p>
          <p className="credit">
            Website design by{" "}
            <a
              href="https://www.chrisratsabout.com"
              className="cr-link"
              target="_blank"
            >
              Chris Ratsabout
            </a>
          </p>
        </div>
      </footer>
      </div>

    </>
  );
};

export default Verse;
