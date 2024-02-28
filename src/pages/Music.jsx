import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Music.css";

const Music = () => {
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
        <div id="header" className="music-header">
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
          </div>
        </div>

        <div className="music-container">
            <h1>Music</h1>
            <p>Here is a list of song collections for which I recorded at least a scratch recording, demo, or
                fully-produced track / album, with links to recordings and lyrics.</p>
        </div>
        <div className="music-card-container">
            <article className="music-release">
                <img src="images/music/cd.png" className="cd" alt="Missing Artwork" />
                <i>Dreams in the Night</i>
                <p>(2003)</p>
                <a href="https://drive.google.com/drive/folders/1-RBcvXe9eetVclLeBaBq0LlXkdti4Hg-" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/1_6YXrt_SNQ-XP0tK6wW9f91If7ZxNzlp/view" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/cd.png" className="cd" alt="Missing Artwork" />
                <i>II: Jemela</i>
                <p>(2003)</p>
                <a href="https://drive.google.com/drive/folders/1vCiSbmJAHoM3r4dUI-W639Yi8c1ep0vS" target="_blank">Demo</a>
                <a href="https://docs.google.com/document/d/13if8g0KB8guAoxIq6quBdr6ah5gr-jkZ-8OslZcpa9c/edit" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/fathers-and-sons.jpg" alt="Fathers and Sons" />
                <i>Fathers and Sons</i>
                <p>(2004)</p>
                <a href="https://drive.google.com/drive/folders/1VDzm2gEAlvkYH_w0tVhZmuTvNiWwOq8l" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/1084t31mwI7ajbvbg6Uc_Nm4AcmXLR9KB/view" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/atlantis.jpg" alt="Return to Atlantis" />
                <i>Return to Atlantis</i>
                <p>(2005)</p>
                <a href="https://drive.google.com/drive/folders/1oiAF1xJ0j0jkDwllvRmfX0G2cmwKG5pD" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/1WzKoZYSBEO8pmAluypgfFMJ3HBmZK1ZM/view" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/cd.png" className="cd" alt="Detritus" />
                <i>Detritus</i>
                <p>(2007)</p>
                <a href="https://drive.google.com/drive/folders/1FFZkZa5sWeYEBpHdbYAScTguF8YMg5kM" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/0B0XyxN2ocI4GWlFiQ3N2WUxSXzQ/view?resourcekey=0-kr9ryoOJrXHms5qaTvo9NQ" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/songs-from-the-war.jpg" alt="Songs from the War" />
                <i>Songs from the War</i>
                <p>(2012)</p>
                <a href="https://drive.google.com/drive/folders/1V7E2Y2XnPsJRd1NaryXzX0muB6P36soS" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/1gPbjtp6RqPd2HYsqYs5tc6zH8jeZQmHM/view" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/bird-queen.jpg" alt="In the Shadow of the Bird Queen" />
                <i>In the Shadow of the Bird Queen</i>
                <p>(2016)</p>
                <a href="https://drive.google.com/drive/folders/1GwNVtNJpxWZLXkQ0IG3p8Jrl_gOc-8Pn" target="_blank">Demo</a>
                <a href="https://drive.google.com/file/d/19dFaoW3jwuRddHGfxxu3BsHaMWBIwLZY/view" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/stars-were-made-to-love-you.jpg" alt="The Stars Were Made to Love You" />
                <i>The Stars Were Made to Love You</i>
                <p>(2020)</p>
                <a href="https://drive.google.com/drive/folders/1ZAoq5omuOOIr1IGs9pqThFT3Ippgt_f8" target="_blank">Demo</a>
                <a href="https://docs.google.com/document/d/1gYEpop9zxc6zhuzfzu1nVJ9lLBww-BYRwLPNmt0ypKo/edit" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/requiem-for-the-bird-queen.jpg" alt="Requiem for the Bird Queen" />
                <i>Requiem for the Bird Queen</i>
                <p>(2020)</p>
                <a href="https://drive.google.com/drive/folders/1NcZqVhMJcwClZRMZpyxGbcwdwdze34kc" target="_blank">Demo</a>
                <a href="https://docs.google.com/document/d/1TvdHUE1U3S-L648H-WzDwKI2IGl-4sXuPPYRImbWg2Q/edit" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/box-of-stars.jpg" alt="Box of Stars" />
                <i>Box of Stars</i>
                <p>(2021)</p>
                <a href="https://drive.google.com/drive/folders/1YzIa1X_i3I4wd4NWSZjb3MI4Tu-SFMn7" target="_blank">Demo</a>
                <a href="https://docs.google.com/document/d/1gYEpop9zxc6zhuzfzu1nVJ9lLBww-BYRwLPNmt0ypKo/edit" target="_blank">Lyrics</a>
            </article>
            <article className="music-release">
                <img src="images/music/kids.jpg" alt="Kids" />
                <i>Kids</i>
                <p>(2022)</p>
                <a href="https://drive.google.com/drive/folders/16_uQmykznVGh8Xt8VYQb_OC1aKIsLoVT" target="_blank">Demo</a>
                <a href="https://docs.google.com/document/d/16JcE6He4EdedMrFF-kLHpQMAeI414cyhvTD4zkKDqCg/edit" target="_blank">Lyrics</a>
            </article>
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

export default Music