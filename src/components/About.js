import React from "react";
import TelegramDoc from "../TelegramDoc.png";
import TelegramScan from '../TelegramScan.png'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <div className="d-flex">
    <img src={TelegramDoc} alt="TelegramDoc" />
    <div className="container">
      <h1 className="text-success">24/7 Expert Help 🌿</h1>
        <ul className="text-success bold">Easy image-based plant disease diagnosis</ul>
        <ul className="text-success bold">Quick access to plant health information</ul>
        <ul className="text-success bold">User-friendly interface for farmers</ul>
        <ul className="text-success bold">Extensive database of plant diseases and treatments</ul>
        <ul className="text-success bold">Seamless communication with agricultural experts</ul>
        <ul className="text-success bold">Real-time notifications for important updates</ul>
        <br/>
        <h3 className="text-success">Scan the QR To Explore our bot 🌿</h3>
        <br/>
      <img src={TelegramScan} alt="Scanner" style={{width:'100%'}}/>
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default About;
