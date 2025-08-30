import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import "./index.css";

import ShortBiography from "./components/ShortBiography";
import HeaderImage from "./components/HeaderImage";
import Section from "./components/Section";
import LongBiography from "./components/LongBiography";
import Links from "./components/Links";
import HeaderBiography from "./components/HeaderBiography";
import Layout from "./components/Layout";
import BiographyContainer from "./components/BiographyContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import Sky from "./components/Sky";
import SkillsContainer from "./components/SkillsContainer";
import ContactContainer from "./components/ContactContainer";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout>
      <Toaster position="top-center" />
      <Section
        classList={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden`}
      >
        <BiographyContainer />
      </Section>
      <Sky numberOfStars={30} />
      <Section classList={`py-20 px-4 bg-slate-800`}>
        <ProjectsContainer />
      </Section>
      <Section classList={`py-20 px-4 bg-slate-900`}>
        <SkillsContainer />
      </Section>
      <Section id={"contact"} classList={`py-20 px-4 bg-slate-800`}>
        <ContactContainer />
      </Section>
    </Layout>
  );
}

export default App;
