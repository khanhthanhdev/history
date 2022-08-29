import React from "react";
import PrehistoricOne from "pages/PrehistoricOne";
import ProtohistoryOne from "pages/ProtohistoryOne";
import ProtohistoryTwo from "pages/ProtohistoryTwo";
import Resources from "pages/Resources";
import After1945Three from "pages/After1945Three";
import After1945Four from "pages/After1945Four";
import IndependenceFour from "pages/IndependenceFour";
import Precis from "pages/Precis";
import After1945Two from "pages/After1945Two";
import Home1 from "pages/Home1";
import FrenchDominationThree from "pages/FrenchDominationThree";
import ChineseDominationFour from "pages/ChineseDominationFour";
import After1945Five from "pages/After1945Five";
import ChineseDominationTwo from "pages/ChineseDominationTwo";
import ChineseDominationThree from "pages/ChineseDominationThree";
import ProtohistoryThree from "pages/ProtohistoryThree";
import ChineseDominationOne from "pages/ChineseDominationOne";
import IndependenceOne from "pages/IndependenceOne";
import Website from "pages/Website";
import Timeline from "pages/Timeline";
import PrehistoricThree from "pages/PrehistoricThree";
import IndependenceTwo from "pages/IndependenceTwo";
import PrehistoricTwo from "pages/PrehistoricTwo";
import FrenchDominationFour from "pages/FrenchDominationFour";
import FrenchDominationOne from "pages/FrenchDominationOne";
import FrenchDominationTwo from "pages/FrenchDominationTwo";
import After1945One from "pages/After1945One";
import ProtohistoryFour from "pages/ProtohistoryFour";
import Contact from "pages/Contact";
import IndependenceThree from "pages/IndependenceThree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/independencethree" element={<IndependenceThree />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/protohistoryfour" element={<ProtohistoryFour />} />
        <Route path="/after1945one" element={<After1945One />} />
        <Route path="/frenchdominationtwo" element={<FrenchDominationTwo />} />
        <Route path="/frenchdominationone" element={<FrenchDominationOne />} />
        <Route
          path="/frenchdominationfour"
          element={<FrenchDominationFour />}
        />
        <Route path="/prehistorictwo" element={<PrehistoricTwo />} />
        <Route path="/independencetwo" element={<IndependenceTwo />} />
        <Route path="/prehistoricthree" element={<PrehistoricThree />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/website" element={<Website />} />
        <Route path="/independenceone" element={<IndependenceOne />} />
        <Route
          path="/chinesedominationone"
          element={<ChineseDominationOne />}
        />
        <Route path="/protohistorythree" element={<ProtohistoryThree />} />
        <Route
          path="/chinesedominationthree"
          element={<ChineseDominationThree />}
        />
        <Route
          path="/chinesedominationtwo"
          element={<ChineseDominationTwo />}
        />
        <Route path="/after1945five" element={<After1945Five />} />
        <Route
          path="/chinesedominationfour"
          element={<ChineseDominationFour />}
        />
        <Route
          path="/frenchdominationthree"
          element={<FrenchDominationThree />}
        />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/after1945two" element={<After1945Two />} />
        <Route path="/precis" element={<Precis />} />
        <Route path="/independencefour" element={<IndependenceFour />} />
        <Route path="/after1945four" element={<After1945Four />} />
        <Route path="/after1945three" element={<After1945Three />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/protohistorytwo" element={<ProtohistoryTwo />} />
        <Route path="/protohistoryone" element={<ProtohistoryOne />} />
        <Route path="/prehistoricone" element={<PrehistoricOne />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
