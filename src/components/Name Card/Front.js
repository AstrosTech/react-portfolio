import React, { useState } from "react";

const Front = () => {

    const [isFlip, setIsFlip] = useState(false);

    const handleFlip = () => {
        setIsFlip(true)
    }

    return (
        <div className={isFlip ? "flip-card-inner name add-shadow" : "name add-shadow"}>
            <div className="flip-card-front">

                <section className="">
                    <section>
                        <h1 className="text-center">Sebastian Lample</h1>
                        <h3 className="text-center">Full Stack Web Developer</h3>
                    </section>
                </section>

                <section className="d-flex justify-content-center">
                        <button onClick={() => handleFlip()} id="learnMore-btn">Learn More</button>
                </section>

            </div>
        </div>
    );
};

export default Front;
