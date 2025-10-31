import React from "react";
import { Link } from "react-router";
import "./HomePage.css";
import brainImg from './brainFix.jpg'

export default function HomePage() {
  return (
    <div>
      <div className="mainPage">Добро пожаловать на интелектульную игру</div>
      <img src={brainImg} alt="brain" className="img"/>
    </div>
  );
}
