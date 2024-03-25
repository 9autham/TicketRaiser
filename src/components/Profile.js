import React from 'react'
import "../App.css";
import Halley from "../Profile.jpg";
const Profile = () => {
  return (
    <img src={Halley} className="rounded-circle" height={50} width={50} alt='Profile'/>
  )
}

export default Profile