import "../CSS/Pages CSS/Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import Waveline from "../Components/Waveline";
import { SiSolidity } from "react-icons/si";

function App() {
  return (
    <motion.div className="homeBody">
      <div className="mainContent">
        <div id="waveline">
          <Waveline />
        </div>
        <div className="mainView">
          <motion.div
            className="homeLeftSide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="htmlTags">/html</p>
            <p className="htmlTags">body</p>
            <p className="htmlTags">h1</p>
            <p className="heading" id="heading1">
              Hi!
            </p>
            <p className="heading" id="heading2">
              I'm Rijul
            </p>
            <p className="htmlTags">/h1</p>
            <p id="desc">Full Stack Web & App Developer</p>
            <p className="htmlTags">/p</p>
            <p className="htmlTags">/body</p>
            <Link to="/about" className="contactMe">
              More about me
            </Link>
          </motion.div>

          <motion.div
            className="floatingDiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FaHtml5 className="floatingIcons" id="html" />
            <FaReact className="floatingIcons" id="react" />
            <FaCss3 className="floatingIcons" id="css" />
            <FaJs className="floatingIcons" id="js" />
            <FaNodeJs className="floatingIcons" id="node" />
            <FaFigma className="floatingIcons" id="figma" />
            <SiSolidity className="floatingIcons" id="solidity" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
