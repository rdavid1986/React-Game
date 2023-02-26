import React from "react";
import Player from "./ViewOnScreen/Bars/PlayerBars/Player.jsx";
import Enemy from "./ViewOnScreen/Bars/EnemyBars/Enemy.jsx";
import "./screen.css";

function Screen(){

    return (
        <div className="screen">
            <div id="player-enemy" className="player-enemy">
                <Player />
                <Enemy />
            </div>
        </div>
    );
}
export default Screen;