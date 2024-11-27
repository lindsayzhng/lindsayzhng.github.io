import React, {useState} from 'react'
import ItsMeFrog from '../components/itsMeFrog'
import me from '../resources/icons/me.png'
import eyeball from '../resources/icons/eyeball.png'
import frogchill from '../resources/icons/chillfrog.png'
import froggasp from '../resources/icons/froggasp.png'
import '../pages/styling/aboutme.css'

function AboutMe(){
    const [over, setOver] = useState(false);
    const [click, setClicked] = useState(false);

    const handleToggle = () => {
        setClicked(!click); // Toggle the clicked state
        setOver(!click); // Update the hover state
    };

    return(
        <div class = "outer-box">
            <ItsMeFrog />
            {/* <div class = "me-box">
                {/* <h1 class = "name-pos">linds</h1>
                <div class = "grad">
                    <img class = "angel" src={me} alt='angel'/>
                    <img class = "eye" src={eyeball} alt='eye'/> {/*TODO: make eyeball move with cursor? and maybe make it blink}
                </div> }
        
            </div> */}
        </div>
    )
}

export default AboutMe