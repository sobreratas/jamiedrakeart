import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/History.css";

const History = (props) => {
  //TAB TITLE
  useEffect(()=> {
    document.title = props.title;
  })



  const [activeTab, setActiveTab] = useState("early-days");

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

  const images = [
    { path: "images/history/history-1.jpg" },
    { path: "images/history/history-2.jpg" },
    { path: "images/history/history-3.jpg" },
    { path: "images/history/history-5.jpg" },
    { path: "images/history/history-6.jpg" },
    { path: "images/history//history-4.jpg" },
  ];

  const imageMap = images.map((image, index) => {
    return <img key={index} src={image.path} alt="" />;
  });

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const indicators = document.querySelectorAll(".indicator");
    indicators[0].classList.add("active");
  }, []); // Run this effect only once after the initial render

  const setPrevCurrent = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    const indicators = document.querySelectorAll(".indicator");
    indicators[current].classList.remove("active");
    indicators[current - 1].classList.add("active");
  };

  const setNextCurrent = () => {
    if (current === images.length - 1) {
     setCurrent(0);
  } else {
      setCurrent(current + 1);
      const indicators = document.querySelectorAll(".indicator");
      indicators[current].classList.remove("active");
      indicators[current + 1].classList.add("active");
  }
  };

  return (
    <>
        <div id="history-body" className="header">
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
          <div id="about">
            <div className="container">
              <div className="row">
                <div className="about-col-1">
                  <div className="carousel-container">
                    <div className="slide-container" style={{ transform: `translateX(-${current * 100}%)` }}>
                      {imageMap}
                      {/* <img src="images/history/history-1.jpg" alt="" />
                      <img src="images/history/history-1.jpg" alt="" />
                      <img src="images/history/history-1.jpg" alt="" />
                      <img src="images/history/history-1.jpg" alt="" />
                      <img src="images/history/history-1.jpg" alt="" />
                      <img src="images/history/history-1.jpg" alt="" /> */}
                    </div>
                    <div className="btns">

                      <button
                        id="prevBtn"
                        className={`prevBtn slide-button material-symbols-rounded ${current != 0 ? "" : "hidden"}`}
                        onClick={setPrevCurrent}
                      >
                        chevron_left
                      </button>
                      <button
                        id="nextBtn"
                        className={`nextBtn slide-button material-symbols-rounded ${current != images.length - 1 ? "" : "hidden"}`}
                        onClick={setNextCurrent}
                      >
                        chevron_right
                      </button>
                    </div>
                    <div className="indicators">
                      <div className="indicator-container">
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-col-2">
                  <h1 className="sub-title">History</h1>
                  <div className="tab-titles">
                    <p
                      className={`tab-links ${
                        activeTab === "early-days" ? "active-link" : ""
                      }`}
                      onClick={() => setActiveTab("early-days")}
                    >
                      Early Days
                    </p>
                    <p
                      className={`tab-links ${
                        activeTab === "first-efforts" ? "active-link" : ""
                      }`}
                      onClick={() => setActiveTab("first-efforts")}
                    >
                      First Efforts
                    </p>
                    <p
                      className={`tab-links ${
                        activeTab === "formative-years" ? "active-link" : ""
                      }`}
                      onClick={() => setActiveTab("formative-years")}
                    >
                      Formative Years
                    </p>
                    <p
                      className={`tab-links ${
                        activeTab === "toward-the-muse" ? "active-link" : ""
                      }`}
                      onClick={() => setActiveTab("toward-the-muse")}
                    >
                      Toward the Muse
                    </p>
                    <p
                      className={`tab-links ${
                        activeTab === "the-muse" ? "active-link" : ""
                      }`}
                      onClick={() => setActiveTab("the-muse")}
                    >
                      The Muse
                    </p>
                  </div>

                    <div className={`tab-contents ${activeTab === 'early-days' ? "active-tab" : ""}`} id="early-days">
                      <p>
                        A cliché that often applies to artists is that they come
                        from bad or traumatic childhoods. This is what made them
                        into artists. In my case, it is true, except it did not
                        make me into an artist, at least not immediately. The
                        art would come later. As a child, I was an athlete and a
                        good student, and reading, writing, or playing
                        instruments never happened, basically. I give props to
                        my big brother Bob, however, for putting together the
                        soundtrack of my childhood. He played the guitar and had
                        a vinyl collection and he provided a continuous stream
                        of Beatles, AC/DC, Led Zeppelin, Queen, Pink Floyd, and
                        more. It was my musical heritage, so to speak, even if I
                        didn&apos;t know it or realize it until many years
                        later. The one band that I could claim as mine was Kiss,
                        and I saw them in concert in Fort Wayne in 1979, during
                        the <i>Dynasty</i> tour and before they unmasked
                        famously on MTV. Somehow I managed to acquire three of
                        the four solo albums they did (all but Gene
                        Simmons&apos;), and I saw the movie on TV in which the
                        Kiss band members played superheroes. The Kiss concert
                        was the first of what would become dozens of concerts
                        that I would see.{" "}
                      </p>
                      </div>


                    <div className={`tab-contents ${activeTab === 'first-efforts' ? "active-tab" : ""}`} id="first-efforts">
                      <p>
                        I took the required music classes in elementary and
                        middle school, and I remember playing the recorder and
                        singing in choir in sixth grade, but I do not remember
                        learning theory or being taught how to read music other
                        than FACE for the spaces on the treble clef and EGBDF
                        Every Good Boy Deserves Fudge for the lines on the staff
                        (is that what you call it?). As I began to come of age,
                        I started to listen to music of my own choosing and
                        artists at the top of my list were Duran Duran (Save a
                        Prayer was my favorite), Prince and the Revolution
                        (Purple Rain! I was 12 when it was released. ), and
                        Mötley Crüe. One strange memory I have is listening to
                        one and only one Rockline episode on the radio when I
                        lived in Indianapolis, during 8th grade, which must have
                        been 1986-1987 and the following summer, before 9th
                        grade, and the guest was R.E.M., no doubt there to
                        promote their album <i>Document</i> and the single
                        &quot;The One I Love.&quot; I thought then that the song
                        was something new, something I wanted more of, and I
                        still think that it is R.E.M.&apos;s best song.
                        Nevertheless, I did not pursue R.E.M. after listening to
                        the radio and I did not hear them again on any platform
                        until 1991&apos;s <i>Out of Time</i>, when the band
                        would establish itself on a global level. Why did I not
                        pursue R.E.M. or any other musical artist at that time?
                        I would say it is because I had no external motivation,
                        means, or support to go about it. I had no idea where to
                        find R.E.M.`&apos;s music, I did not have MTV, and I was
                        still generally interested in sports and baseball
                        specifically. I collected baseball cards and not albums,
                        and that was that.{" "}
                      </p>
                    </div>
                    <div className={`tab-contents ${activeTab === 'formative-years' ? "active-tab" : ""}`} id="formative-years">
                    <p>
                      In high school, back in Fort Wayne, I did begin to pursue
                      hair metal bands and I even saw Poison, Ratt, and
                      Cinderella in concert. In the summer of 1988, however, my
                      definition of &quot;good music&quot; began to change. A
                      friend of mine (thanks Brian!) kept talking to me about
                      this song called &quot;Welcome to the Jungle&quot; and how
                      kickass it was. Then, perhaps by dumb luck or fate, I
                      heard &quot;Sweet Child O&apos; Mine&quot; by the same
                      band and before hearing &quot;Jungle.&quot; What a
                      revelation it was! It sounded authentic, raw, raunchy, and
                      basically like rock should sound. Guns N&apos; Roses
                      became my gateway band in that moment. First, I bought the
                      cassette two or three times and wore it out each time in
                      my 1976 Mustang&apos;s (a Fastback) tape deck from playing
                      it so much. GNR was my first musical obsession. Second, as
                      my obsession grew, I paid attention to the (electric)
                      guitar playing for the first time, and I was able to
                      distinguish between Izzy&apos;s parts and Slash&apos;s
                      parts. GNR <i>Lies</i>{" "}
                       enhanced my obsession. Additionally, my success in
                      purchasing the GNR album led me to purchase albums by
                      other, little-known-to-me artists, such as N.W.A., The
                      Black Crowes, and more.{" "}
                    </p>
                    </div>

                   

                    <div className={`tab-contents ${activeTab === 'toward-the-muse' ? "active-tab" : ""}`}id="towards-the-muse">
                      <p>
                        If GNR was the gateway to music listening for me,
                        Nirvana was the gateway to playing an instrument. On
                        September 17, 1991, I was the first in line at the music
                        store in the mall to purchase <i>Use Your Illusion</i>.
                        It was a great collection of songs, and I still listen
                        to it occasionally, but the following week Nirvana would
                        blow the doors off the establishment with the release of{" "}
                        <i>Nevermind</i>. Of course, I did not hear anything
                        from it until probably November, 1991. One night while
                        at my mother&apos;s house, I was listening to local
                        103.9 (WXKE --The Rock) on her big console stereo when I
                        heard the opening notes for &quot;Come As You Are&quot;.
                        When the song finished, I had the same feeling that I
                        did when I heard &quot;The One I Love&quot; or
                        &quot;Sweet Child&quot;: I just knew that things were
                        going to change for me. I went out that week and bought{" "}
                        <i>Nevermind</i>, which was when I heard &quot;Smells
                        Like Teen Spirit&quot; and the rest of the album for the
                        first time. I was in college and was able to watch some
                        MTV in a commons area in one of my buildings, and the
                        video for &quot;Teen Spirit&quot; just crushed me. Wait
                        a minute! Teens burning down their high school? Hell
                        yes! It was on MTV that I saw and heard Pearl Jam&apos;s
                        &quot;Alive&quot; for the first time, and later, in an
                        apartment I shared with two dudes from high school, I
                        saw and heard for the first time, again on MTV,
                        &quot;Cherub Rock&quot; by The Smashing Pumpkins. All of
                        this was so new, so weird, and so great, not to mention
                        Romantic. I was learning all kinds of things in my
                        college classNamees, meeting new people, reading novels
                        for pleasure (<i>The Sun Also Rises</i> by Hemingway was
                        chief among them), learning a new language (Spanish),
                        and dating girls for the first time, and the music that
                        changed American popular culture also changed me. I
                        eventually purchased an acoustic guitar, an Alvarez.
                        Despite my great intentions, my self-taught approach
                        fizzled fast as my fingers were always in pain and I was
                        not ready to commit to the 10,000 hours it would take to
                        master the instrument. I put it away, taking it out
                        occasionally over the years, replacing it with an
                        Epiphone, adding to it an electric guitar, and putting
                        away my desire to play the guitar.
                      </p>
                    </div>

                    <div className={`tab-contents ${activeTab === 'the-muse' ? "active-tab" : ""}`} id="the-muse">
                      <p>
                        What pushed me to finally learn the guitar well enough
                        to write songs was developing a relationship with my
                        eventual wife. I was so enamored that I began to write
                        words and poetry and song verses and that pushed me into
                        playing the guitar and then putting the words to music
                        and the rest is history. Today, after 17 years of
                        marriage, I still write songs for her. It will likely
                        never stop, and those original songs and the creativity
                        and skills I developed as a guitar player, while still
                        not being those of a virtuoso, have led me into songs
                        about other themes and also into writing fiction
                        following the path of Hemingway, the gatekeeper that led
                        me to García Márquez, Fuentes, Kerouac, Vargas Llosa,
                        Plath, Carpentier, and many other great writers.
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
        </div>


      
    </>
  );
};

export default History;
