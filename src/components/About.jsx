import React from "react";
import "./css_modules/About.css";
export default function About() {
    return (
        <div className="Container">
            <div className="About">
                <span className="span-btn">About me</span>
            </div>

            <div className="child">
                <div className="bg-pic">
                    <div className="container-pic">
                        <div className="background">
                            <div className="pic"></div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <p className="bold">About Me</p>
                    <p className="info-text">
                        I study at Scaler School of Technology.
                    </p>
                    <p className="info-text">
                        When I'm not coding, you can find me on the Basketball court.
                    </p>
                    <p className="info-text">
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    </p>
                    <p className="info-text">
                        If you have any interesting projects or opportunities, I would love to hear about them.
                    </p>
                    <p>
                    I strive to be better every day. I am constantly learning multiple technologies and building things.
                    </p>
                    <p className="info-text">
                        Let's connect and create something amazing together!
                    </p>
                    
                </div>
            </div>
        </div>
    );
}