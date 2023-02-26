import React from "react";
import "../bars.css";
import skills from "../../../../../data/data.js";
import SkillsComponent from "../../Skills/SkillsComponent.jsx"

function PlayerBars(){

    return(
        <>
        <div className="player">
            <h1 id="player__name" className="player__name">Player</h1>
            <div className="bars">
                <div className="hp" id="player__hp">HP</div>
            </div>
            <div className="bars">
                <div className="mp" id="player__mp">MP</div>
            </div>
                <SkillsComponent  skills={skills} />
        </div>
        </>
    );
}

export default PlayerBars;