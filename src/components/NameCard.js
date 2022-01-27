import React, { useState } from "react";
import '../static/css/NameCard.css'
import Navigation from "./Navigation";

const NameCard = () => {
    const [isFlipped, setIsFlip] = useState(false);

    const handleFlip = () => setIsFlip(true)

    return (
        <section className="flip-card hero d-flex justify-content-center align-items-center w-100">
            <div className={isFlipped ? "flip-card-inner name add-shadow" : "name add-shadow"}>
                
                <div className={isFlipped ? "flip-card-front display-none" : "flip-card-front"}>
                    <section>
                        <section>
                            <h1 className="text-center">Sebastian Lample</h1>
                            <h3 className="text-center">Full Stack Web Developer</h3>
                        </section>
                    </section>

                    <section className="d-flex justify-content-center">
                            <button onClick={() => handleFlip()}>Learn More</button>
                    </section>
                </div>

                <div className={!isFlipped ? "flip-card-back display-none" : "flip-card-back"}>
                    <Navigation/>
                </div>
            </div>
        </section>
    );
}

export default NameCard;
