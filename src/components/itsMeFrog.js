import React, {useState} from 'react'
import frogchill from '../resources/icons/chillfrog.png'
import froggasp from '../resources/icons/froggasp.png'
import yell from '../resources/icons/yell.png'
import sketchyLine from '../resources/misc/sketchyLine.png'
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
            <div class = "frog-box"
            onMouseOver={() => click ? setOver(click): setOver(!click)}
            onMouseOut={() => setOver(click)}
            onClick={() => handleToggle()}> {/* frog animation lol TODO: Speech bubble :)*/}
                <img class = 'frog' src = {over ? froggasp: frogchill}/>
                {over && <img class = 'yell' src = {yell}/>}
            </div>
            <div class = 'inner-box'>
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
            </div>
            
        </div>
    )
}

export default ItsMeFrog