import React, { useState } from "react";
import dataTeam from "../assets/fake-data/dataTeam";
import Banner from "../components/banner/Banner";
import Project2 from "../components/project/Project2";
import dataItem from "../assets/fake-data/data-item";
import Partner from "../components/partner/Partner";
import Footer2 from "../components/footer/Footer2";
import Team2 from "../components/team/Team2";
import Preloader from "../components/Animation/Preloader";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/header/Header";


function Home01(props) {

  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Check if the site is being loaded for the first time or if it's a refresh
  //   const isFirstLoadOrRefresh = window.performance.navigation.type === 1 || window.performance.navigation.type === 2;

  //   if (isFirstLoadOrRefresh) {
  //     // If it's the first load or a refresh, simulate loading time
  //     const loadingTimeout = setTimeout(() => {
  //       setIsLoaded(true);
  //       // Store the information that the site has been loaded before in local storage
  //       localStorage.setItem("siteLoadedBefore", "true");
  //     }, 3000); // 3000 milliseconds = 3 seconds

  //     // Clear the timeout if the component is unmounted
  //     return () => clearTimeout(loadingTimeout);
  //   } else {
  //     // If not the first load or refresh, set isLoaded to true immediately
  //     setIsLoaded(true);
  //   }
  // }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>

      {/* <Preloader /> */}
      {!isLoaded && <Preloader />}
      <div id="home" className="home-1 wrapper ">
          <motion.div className="progress-bar z-[9999] fixed top-0 left-0 right-0 h-1 bg-[red] transform origin-top" style={{ scaleX }} />
          <Header/>
        <Banner />
        <Project2 data={dataItem} />

        <Team2 data={dataTeam} />
        <div className="mb-16">
          <Partner />
        </div>
        <Footer2 />
      </div>
    </>
  );
}

export default Home01;
