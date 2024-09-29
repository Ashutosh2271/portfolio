import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from   './components/Skills'
import RingLoader from "react-spinners/RingLoader";

import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
 {loading ? (
  <div className="flex h-screen justify-center items-center bg-[#00040f]">
      <RingLoader
 color="#0891b2"
 loading={loading}
 cssOverride={override}
 size={90}
 aria-label="Loading Spinner"
 data-testid="loader"
  />
        </div>
 ) : (
<div>
          <Navbar></Navbar>
          <About></About>
          <Skills/>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
        </div>
 )}
        
    
    </>
  );
};
export default App;
