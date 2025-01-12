import React, {useState} from 'react'
import frogchill from '../resources/icons/chillfrog.png'
import froggasp from '../resources/icons/froggasp.png'
import yell from '../resources/icons/yell.png'
import lilypad_acute from '../resources/icons/lilypads/lilypad_acute.png'
import lilypad_right from '../resources/icons/lilypads/lilypad_right.png'
import lilypad_flower from '../resources/icons/lilypads/lilypad_flower.png'
import lilypad_big from '../resources/icons/lilypads/lilypad_big.png'
import lilypad_acute_hover from '../resources/icons/lilypads/lilypad_acute_github.png'
import lilypad_right_hover from '../resources/icons/lilypads/lilypad_right_me.png'
import lilypad_flower_hover from '../resources/icons/lilypads/lilypad_flower_library.png'
import lilypad_big_hover from '../resources/icons/lilypads/lilypad_big_linkedin.png'
import './styling/itsmefrog.css'

function ItsMeFrog(){
    const [over, setOver] = useState(false);
    const [click, setClicked] = useState(false);

    const handleToggle = () => {
        setClicked(!click); // Toggle the clicked state
        setOver(!click); // Update the hover state
    };

    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/lindzhang/"
    }

    return(
        <div class = "outer-box">
            
            <img class = 'big_lily' src = {over ? lilypad_big_hover : lilypad_big}/>
            <img class = 'acute_lily' src = {over ? lilypad_acute_hover : lilypad_acute}/>
            <img class = 'flower_lily' src = {over ? lilypad_flower_hover : lilypad_flower}/>
            <img class = 'right_lily' src = {over ? lilypad_right_hover : lilypad_right}/>

            <div class = "frog-box"
            onMouseOver={() => click ? setOver(click): setOver(!click)}
            onMouseOut={() => setOver(click)}
            onClick={() => handleToggle()}> {/* frog animation lol TODO: Speech bubble :)*/}
                <img class = 'frog' src = {over ? froggasp: frogchill}/>
                {over && <img class = 'yell' src = {yell}/>}
            </div>
            {/* <div class = 'inner-box'>
                {over && click &&
                <div>
                    <h1>Hii!</h1>
                    <h2>I'm Lindsay! You can call me Linds
                    </h2>

                    <img src = {sketchyLine} class = 'line'/>

                    <h2>
                    This website is under construction 
                    please come back later ^-^
                    </h2>

                    <h3 onClick={handleLinkedInClick}>
                        my LinkedIn
                    </h3>
                </div>}
            </div> */}

        </div>
    )
}

export default ItsMeFrog