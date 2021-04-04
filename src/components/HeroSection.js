import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";
import mainVideoOne from '../videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={mainVideoOne} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
