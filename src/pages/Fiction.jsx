import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Fiction.css";

const Fiction = (props) => {
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
        <div id="fiction-body" className="verse-header">
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

        <div className="fiction-container">
    <h1>Fiction</h1>
    <p className="fiction-header-text">As I stated in <a href="history.html">HISTORY</a>, songwriting led me to
        writing fiction. Below is a list of my novels with links to the PDF/Google Doc and the purchaseable
        version found online, with a brief summary of each.</p>
    <div className="fiction-box-container">
        <div className="fiction-box-container-row-1">
            <div className="fiction-box-container-row-1-col-1">
                <img src="images/fiction/the-appleseeds-cover.jpg" className="book-cover" alt="The Appleseeds" />
            </div>
            <div className="fiction-box-container-row-1-col-2">
                <p><strong><i>The Appleseeds </i>(2011) </strong>The Appleseeds is an urban Midwestern tale of
                    aspiration, love and
                    loss, and redemption, in which Andrew Apple, the protagonist and principal narrator, pursues
                    a life that reflects his subjective identity as an artist and musician. As the dream grows
                    closer to becoming objective reality, the iniquity that pervades the personages of Apple’s
                    inner circle diverts him from his righteous and self-affirming path, leading to the death of
                    his friend and collaborator, his own moral collapse, and the disintegration of the dream and
                    band known as The Appleseeds. Andrew’s subsequent exile from his hometown of Fort Wayne,
                    Indiana, and the life he dreamed ultimately results in redemption, which he achieves through
                    the love of an unforeseen soul. In the end, the songs of The Appleseeds are the only
                    evidence that remains of the dream. </p>
                <div className="fiction-btns-container">
                    <a href="https://www.lulu.com/shop/andrew-apple/the-appleseeds/paperback/product-1252wrp8.html?page=1&pageSize=4"
                        target="_blank"><img src="images/fiction/lulu-logo.png" className="fiction-btn" /></a>
                    <a href="https://drive.google.com/file/d/1APZz8fLQsECnFxgMueyR8H6Qm5A_C4mC/view"
                        target="_blank"><img src="images/fiction/drive-logo.png" className="fiction-btn" /></a>
                </div>
            </div>
        </div>

        <div className="fiction-box-container-row-1">
            <div className="fiction-box-container-row-1-col-1 ">
                <img src="images/fiction/the-places-we-lived.jpeg" className="book-cover" alt="" />
            </div>
            <div className="fiction-box-container-row-1-col-2 ">

                <p><strong><i>The Places We Lived </i>(2016) </strong>
                    Lindo Dixon comes of age in this episodic account of the
                    Reagan years. White, poor, and victimized, Lindo navigates the places he lives -- a world
                    forgotten by trickle-down economics -- with the help of baseball, friends, and some
                    inspirational adults that show him the path to a better way. </p>
                <div className="fiction-btns-container">
                    <a href="https://www.lulu.com/shop/jamie-drake/the-places-we-lived/paperback/product-19kpp4r6.html?q=the+places+they+lived&page=1&pageSize=4"
                        target="_blank"><img src="images/fiction/lulu-logo.png" className="fiction-btn" /></a>
                    <a href="https://drive.google.com/file/d/1ixshLCzf9Wv-lQscyrs3QZpdbdKjDye_/view"
                        target="_blank"><img src="images/fiction/drive-logo.png" className="fiction-btn" /></a>
                </div>
            </div>
        </div>

        <div className="fiction-box-container-row-1">
            <div className="fiction-box-container-row-1-col-1 ">
                <img src="images/fiction/testament.jpeg" className="book-cover" alt="" />
            </div>
            <div className="fiction-box-container-row-1-col-2 ">
                <p> <strong><i>Testament </i>(2019) </strong>
                    Testament is the undulating and fragmented first-person testimony of Eddie Azure of the
                    divine among us, which is embodied by the teenage bird goddess, Avía Skye.The evangelical
                    tale of their convergence as lovers and of the dramatic end is at once a lyrical and
                    labyrinthine lamentation of love and loss, an object lesson on obsession, and a descent to
                    darkness.
                </p>
                <div className="fiction-btns-container">
                    <a href="https://www.lulu.com/shop/dixon-wood/testament/paperback/product-dwq2z8.html?page=1&pageSize=4"
                        target="_blank"><img src="images/fiction/lulu-logo.png" className="fiction-btn" /></a>
                    <a href="https://drive.google.com/file/d/1xzwXqPx2smKfBs73e1HAQD33RMs9z3ra/view"
                        target="_blank"><img src="images/fiction/drive-logo.png" className="fiction-btn" /></a>
                </div>
            </div>
        </div>

        <div className="fiction-box-container-row-1">
            <div className="fiction-box-container-row-1-col-1 ">
                <img src="images/fiction/empty-cover.jpg" className="book-cover" alt="" />
            </div>
            <div className="fiction-box-container-row-1-col-2 ">

                <p className="no-write-up"><strong><i>Covanent </i>(2024) </strong>
                    In progress...
                </p>
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
  )
}

export default Fiction