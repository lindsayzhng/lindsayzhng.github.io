import React, {useState} from 'react'
import me from '../resources/icons/me.png'
import eyeball from '../resources/icons/eyeball.png'
import frogchill from '../resources/icons/chillfrog.png'
import froggasp from '../resources/icons/froggasp.png'
import '../components/aboutme.css'

function AboutMe(){
    const [over, setOver] = useState(false);
    const [click, setClicked] = useState(false);

    const handleToggle = () => {
        setClicked(!click); // Toggle the clicked state
        setOver(!click); // Update the hover state
    };

    return(
        <div class = "outer-box">
            <div class = "me-box">
                <h1 class = "name-pos">linds</h1>
                <div class = "grad">
                    <img class = "angel" src={me} alt='angel'/>
                    <img class = "eye" src={eyeball} alt='eye'/> {/*TODO: make eyeball move with cursor? and maybe make it blink*/}
                </div>
                <div class = "frog-box"> {/* frog animation lol TODO: Speech bubble :)*/}
                    <img class = 'frog' src = {over ? froggasp: frogchill}
                    onMouseOver={() => click ? setOver(click): setOver(!click)}
                    onMouseOut={() => setOver(click)}
                    onClick={() => handleToggle()}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe