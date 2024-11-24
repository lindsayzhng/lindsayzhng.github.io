import React, {useState} from 'react'
import me from '../resources/icons/me.png'
import eyeball from '../resources/icons/eyeball.png'
import frogchill from '../resources/icons/chillfrog.png'
import froggasp from '../resources/icons/froggasp.png'
import '../components/aboutme.css'

function AboutMe(){
    const [over, setOver] = useState(false);
    const [click, setClicked] = useState(false);

    return(
        <div class = "outer-box">
            <div class = "me-box">
                <h1 class = "name-pos">itslinds</h1>
                <div class = "grad">
                    <img class = "angel" src={me} alt='angel'/>
                    <img class = "eye" src={eyeball} alt='eye'/> {/*TODO: make eyeball move with cursor?*/}
                </div>
                <div class = "frog-box"
                    onMouseOver={() => click && !over ? setOver(false): setOver(true)}
                    onMouseOut={() => click ? setOver(true): setOver(false)}
                    onMouseDown={() => setClicked(!click)}> {/* frog animation lol */}
                    <img class = 'frog' src = {over? froggasp: frogchill}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe