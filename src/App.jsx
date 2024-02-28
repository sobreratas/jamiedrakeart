import "../src/css/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Music from "./pages/Music";
import TheMurmurations from "./pages/TheMurmurations";
import Verse from "./pages/Verse";
import Fiction from "./pages/Fiction";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faXmark,
  faArrowUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { faSpotify, faApple, faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(
  fab,
  faBars,
  faXmark,
  faArrowUp,
  faPaperPlane,
  faSpotify,
  faApple,
  faYoutube
);

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/the-murmurations" element={<TheMurmurations />}></Route>
          <Route path="/fiction" element={<Fiction />}></Route>
          <Route path="/verse" element={<Verse />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
