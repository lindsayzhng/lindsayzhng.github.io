import React from "react";
import "98.css"
import Draggable from "react-draggable";

export default function Clickable({title, text}) {

    return(
    <div>
        <Draggable>
            <div style={{ width: 300 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <p style={{ textAlign: "center" }}>{text}</p>
                    <div className="field-row" style={{ justifyContent: "center" }}></div>
                </div>
            </div>
        </Draggable>
    </div>
        
    );
}


