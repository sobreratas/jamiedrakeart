import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Home.css";
const Home = (props) => {
    //TAB TITLE
    useEffect(()=> {
      document.title = props.title;
    })

  //SCROLL TO TOP FUNCTIONALITY
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  //GET YEAR FOR FOOTER
  const currentYear = new Date().getFullYear();

  //SIDEBAR FUNCTIONALITY
  function openSideBar(){
    sidemenu.style.right = "0";
  }

  function closeSideBar(){
    sidemenu.style.right = "-200px";
  }

  return (
    <>
      <div className="wrapper">
        <div id="header" className="header">
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
                <FontAwesomeIcon className="fa-solid fa-xmark" icon="xmark" onClick={closeSideBar}/>
                <i className="fa-solid fa-xmark"></i>
              </ul>
              <FontAwesomeIcon className="fa-solid fa-bars" icon="bars" onClick={openSideBar}/>
            </nav>

            <Link to="#" className="go-top-btn" onClick={scrollToTop}>
              <FontAwesomeIcon
                className="fa-solid fa-arrow-up"
                icon="arrow-up"
              />
            </Link>
            <div className="header-text">
              <h1>Jamie Drake Art</h1>
              <p>A site featuring the creative</p>
              <p>output of Jamie Drake.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="contact-left">
                <h1 className="sub-title">Contact</h1>
                <p>
                  <FontAwesomeIcon
                    className="fa-regular fa-paper-plane"
                    icon="paper-plane"
                  />{" "}
                  Please fill out the form to message me.
                </p>
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
              </div>
              <div className="contact-right">
                <form
                  id="contactForm"
                  action="#form-submit-random-string-url"
                  method="POST"
                >
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="text"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="Message"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                  <button type="submit" className="btn btn2">
                    Submit
                  </button>
                </form>
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
    </>
  );
};

export default Home;
