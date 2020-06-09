import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide.jsx'
import './App.css';
import JobOpp from './components/jobOpp.jsx'
import LandingButtons from './components/landingButtons.jsx'

import Organizations from './components/organizations.jsx'
import Footer from './components/footerMinimal.jsx'
import MetaTags from 'react-meta-tags';

import Recs from './components/recs.jsx'
import About from './components/about'
import NavBarNew from './components/navBarNew'
import LandinigPage from './components/landingPage'
import Team from './components/team'
import JoinCommunity from './components/joinCommunity'
import Image1 from './img/illustrations/intro1.svg';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-167361197-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">
      <MetaTags>
        <title>impactful</title>
        <meta name="og:description" content="Community and Sources for Tech + Social Impact" />
        <meta property="og:title" content="Impactful Community" />
        <meta property="og:image" content="http://weareimpactful.org/intro1.jpg" />
      </MetaTags>

      <div className = "MainPage">
        <br></br><br></br>
        <LandinigPage></LandinigPage>
        <JobOpp></JobOpp>
        <Organizations></Organizations>

        <Team></Team>
        <Footer></Footer>


        {/* <IntroSlide />

        <LandingButtons></LandingButtons>
        <About></About>

        <JoinCommunity></JoinCommunity>
        <Recs></Recs> */}


      </div>


      {/* <FooterMinimal></FooterMinimal> */}

    </div>
  );
}

export default App;
