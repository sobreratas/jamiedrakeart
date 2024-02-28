import React from 'react';
import { Link } from "react-router-dom";
import { Spotify } from 'react-spotify-embed';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/TheMurmurations.css"

const TheMurmurations = () => {
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
        <div id="header" className="murm-header">
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

        <div className="band-info-container">
            <img className="band-logo" src="images/murmurations/band-logo.png" alt="" />
            <div className="murm-container">
                <div className="background-image"></div>
                <p className="band-text"><strong>The Murmurations</strong> formed in 2017 when I asked some friends to help me
                    take <i>In the Shadow of the Bird Queen</i>{" "}
                    to the stage. They were: Tyler Damerell (guitar), Chris Ratsabout (guitar), Sean Wooldridge (drums),
                    Dave Baker (keys), and Brian Spahr (bass). I played rhythm guitars and added the vocals, and we played
                    shows together before sadly our friend Dave went on to play keys for God in Heaven and Brian soon
                    thereafter had some health issues and he had to step away from the band. A lean and mean foursome moved
                    forward with Chris on bass. Covid-19 happened and the band did nothing for a while before moving into a
                    recording project that became <i>Box of Stars</i>, which was eventually recorded and mixed at
                    Silverbirch
                    Studios in Fort Wayne in April, 2021. After some shows the band moved into our next recording project
                    and the album that became <i>Kids</i>. We tracked the album at our homes and eventually Chris became the
                    engineering force, with assistance from the rest of the band, that would finish the album and get it the
                    sound that you can now hear on Spotify, Apple Music, etc. He also did the artwork. Tyler and Sean added
                    harmonies, and all of us together worked on the arrangements. As the album was near completion, Chris
                    made it known that he was leaving the band, which he did in March, 2022. The album was released on May
                    24, 2022, and since then we have played shows with several people filling spots, including Brandon
                    Williams (bass), Tim Hardiek (drums), and Lance Holder (drums). Lance is our drummer as we move into
                    2024.</p>
            </div>

            <div className="band-member-container">
                <div className="band-member-card ">
                    <img src="images/murmurations/tyler.jpg" alt="Tyler playing guitar" />
                    <p>Tyler Damerell</p>
                </div>
                <div className="band-member-card ">
                    <img src="images/murmurations/lance.jpg" alt="Lance playing drums" />
                    <p>Lance Holder</p>
                </div>
                <div className="band-member-card ">
                    <img src="images/murmurations/sean.jpg" alt="Sean playing bass and singing" />
                    <p>Sean Wooldridge</p>
                </div>
                <div className="band-member-card ">
                    <img src="images/murmurations/jamie.jpg" alt="Jamie singing and playing guitar" />
                    <p>Jamie Drake</p>
                </div>
            </div>
            <div className="murmurations-music-container">
                <h1 className="">Music</h1>
                <h2 className="">Kids</h2>
                <p className="">(2022)</p>
                <Spotify link="https://open.spotify.com/album/6xMiCEd0KXwfWUlKICo3Yn" />
                {/* <iframe className="" style="border-radius:12px"
                    src="https://open.spotify.com/embed/album/6xMiCEd0KXwfWUlKICo3Yn?utm_source=generator" width="100%"
                    height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe> */}
                <br />
                <iframe className="" width="560" height="315"
                    src="https://www.youtube.com/embed/CD9xDxHVB8g?si=bSKGfWx-y-d9yG6I" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                <br />
                <h2 className="">Box of Stars</h2>
                <p className="">(2021)</p>
                <Spotify link="https://open.spotify.com/album/33hntOhlfuMDdxybVrkO9P" />
                {/* <iframe className="" style="border-radius:12px"
                    src="https://open.spotify.com/embed/album/33hntOhlfuMDdxybVrkO9P?utm_source=generator" width="100%"
                    height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe> */}
                <br />
                <iframe className="" width="560" height="315"
                    src="https://www.youtube.com/embed/5bszqvsk_Y4?si=rTJvU9pY4OmjZj-M" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
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

export default TheMurmurations