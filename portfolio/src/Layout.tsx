import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './component/HeroSection';
import Aproach from './component/Aproach';
import ProjectHead from './component/ProjectHead';
import Project from './component/Project';
import AboutMe from './component/AboutMe';
import VoiceOfSanjay from './component/VoiceOfSanjay';
import Stats from './component/Stats';
import Experience from './component/Experience';
import ToolStack from './component/ToolStack';
import LetsWorkTogether from './component/LetsWorkTogether';
import Footer from './component/Footer';
import Testimoniols from './component/Testimoniols';

const Layout: React.FC = () => {
  return (
    <>
      <motion.div className="sm:px-12 px-8">
        <HeroSection />
        <Aproach />
        <ProjectHead />
        <Project />
        {/* <AboutMe /> */}
        <VoiceOfSanjay />
        <Stats />
        <Experience />
        <ToolStack />
        <Testimoniols/>
        <LetsWorkTogether />

        <Footer />
        {/* <Menu /> */}
        {/* <ProjectPage /> */}
      </motion.div>
    </>
  );
};

export default Layout;
