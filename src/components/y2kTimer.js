import React, { useState, useEffect } from "react";
import "98.css"
import Draggable from "react-draggable";
import Countdown from "react-countdown";
import "./misc.css"

export default function Y2kTimer() {

    const y2kDate = new Date('1999-12-31 23:59:59')
    const today = new Date()
    const [timer, setTimer] = useState(-(y2kDate.getTime() - today.getTime()));
    // console.log(toDate(timer))
    function tick() {
        setTimer(timer + 1);
    }

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1);
      
        return function cleanup() {
            clearInterval(timerID);
          }
       }
    );

    function toDate(s) {
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
          }
        
          var seconds = Math.floor(s / 1000),
                minutes = Math.floor(seconds / 60),
                hours   = Math.floor(minutes / 60),
                days    = Math.floor(hours / 24),
                months  = Math.floor(days / 30),
                years   = Math.floor(days / 365);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;
            days %= 30;
            months %= 12;
        
          return (
            <div class="field-row">
                <windowed-box>
                  -  {years} - {pad(months)} - {pad(days)}      T {pad(hours)} : {pad(minutes)} : {pad(seconds)}
                    
                </windowed-box> 
                {/* <windowed-box>{pad(days)}</windowed-box>
                <windowed-box>{pad(hours)}</windowed-box>
                <windowed-box>{pad(minutes)}</windowed-box>
                <windowed-box>{pad(seconds)}</windowed-box>
                <windowed-box>{pad(s%1000, 3)}</windowed-box> */}
            </div>
            // years+ ':'+pad(months)+':'+pad(days)+':'+pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + '.' + pad(s%1000, 3)
        
        );
    }


    return(
    <div>
        <Draggable>
            <div style={{ width: 300 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Doomsday</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <p style={{ textAlign: "center" }}>Is this the end?</p>
                    <div className="tree-view" style={{ justifyContent: "center" }}>
                        <p>{toDate(timer)}</p>
                        {/* <Countdown date={Date.now() - (y2kDate - Date.now())} renderer={timer} /> */}
                    </div>
                </div>
            </div>
        </Draggable>
    </div>
        
    );
}




