import React from "react";
import TelegramAds from "../TelegramAds.png";
import TelegramLogo from '../Telegram_2019_Logo.svg'
import TelegramScan from '../TelegramScan.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div className="d-flex">
        <img src={TelegramAds} alt="TelegramAds" />
        <div className="container">
          <h1 className="text-success">Empowering farmers with accurate plant health assessments 🌿</h1>
          <br/>
          <h2 className="text-success">Get instant plant diagnoses on Telegram! Click below to access our bot and unlock a world of plant care knowledge.<a href="https://t.me/PlantDieasesTicketRaiserBot" target="_blank" rel="noopener noreferrer"><img src={TelegramLogo} height={70} alt="Logo"></img></a></h2>
          <h3 className="text-success">Scan the QR To Explore our bot 🌿</h3>
          <br/>
          <img src={TelegramScan} alt="Scanner" style={{width:'100%'}}/>
        </div>
      </div>
      {/* <img src={TelegramDoc} alt="TelegramDoc" /> */}
      <Footer/>
    </div>
  );
};

export default Home;
