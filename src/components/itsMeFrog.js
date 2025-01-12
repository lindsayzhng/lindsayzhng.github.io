import React, { useState } from 'react';
import frogchill from '../resources/icons/chillfrog.png';
import froggasp from '../resources/icons/froggasp.png';
import yell from '../resources/icons/yell.png';
import lilypad_acute from '../resources/icons/lilypads/lilypad_acute.png';
import lilypad_right from '../resources/icons/lilypads/lilypad_right.png';
import lilypad_flower from '../resources/icons/lilypads/lilypad_flower.png';
import lilypad_big from '../resources/icons/lilypads/lilypad_big.png';
import lilypad_acute_hover from '../resources/icons/lilypads/lilypad_acute_github.png';
import lilypad_right_hover from '../resources/icons/lilypads/lilypad_right_me.png';
import lilypad_flower_hover from '../resources/icons/lilypads/lilypad_flower_library.png';
import lilypad_big_hover from '../resources/icons/lilypads/lilypad_big_linkedin.png';
import './styling/itsmefrog.css';

function ItsMeFrog() {
    const [over, setOver] = useState(false);
    const [click, setClicked] = useState(false);

    const handleToggle = () => {
        setClicked(!click); // Toggle the clicked state
        setOver(!click); // Update the hover state
    };

    const handleClick = (link) => {
        window.location.href = link; // Redirect to the specified link
    };

    const hoveringClickable = {cursor: over ? 'pointer' : undefined}

    return (
        <div className="outer-box">
            <img
                className="big_lily"
                src={over ? lilypad_big_hover : lilypad_big}
                onClick={over ? () => handleClick("https://www.linkedin.com/in/lindzhang/") : undefined}
                style = {hoveringClickable}
                alt="LinkedIn"
            />
            <img
                className="acute_lily"
                src={over ? lilypad_acute_hover : lilypad_acute}
                onClick={over ? () => handleClick("https://github.com/lindsayzhng") : undefined}
                style = {hoveringClickable}
                alt="GitHub"
            />
            <img
                className="flower_lily"
                src={over ? lilypad_flower_hover : lilypad_flower}
                onClick={over ? () => handleClick("https://www.goodreads.com/user/show/175405202-lindsay-zhang") : undefined}
                style = {hoveringClickable}
                alt="Goodreads"
            />
            <img
                className="right_lily"
                src={over ? lilypad_right_hover : lilypad_right}
                alt="meSection"
            />

            <div
                className="frog-box"
                onMouseOver={() => (click ? setOver(click) : setOver(!click))}
                onMouseOut={() => setOver(click)}
                onClick={() => handleToggle()}
            >
                {/* Frog animation */}
                <img className="frog" src={over ? froggasp : frogchill} alt="Frog" />
                {over && <img className="yell" src={yell} alt="Yell Icon" />}
            </div>
        </div>
    );
}

export default ItsMeFrog;
