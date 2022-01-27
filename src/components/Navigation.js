import React, { useState } from "react";
import '../static/css/Navigation.css'

const Navigation = () => {
    const [isFlipped, setIsFlip] = useState(false);

    const handleFlip = () => setIsFlip(true)

    return (
        <section className="navigation">
            <ul class="d-flex">
                <li class="px-3">
                    <p>Josh</p>
                </li>
                
                <li class="px-3">
                    <p>Peck</p>
                </li>
            </ul>
        </section>
    );
}

export default Navigation;
