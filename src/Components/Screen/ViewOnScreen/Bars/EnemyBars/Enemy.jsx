import React from "react";
import "../bars.css";

function EnemyBars(){

    return (
        <>
        <div className="enemy">
            <h1 id="enemy__name" className="enemy__name">Enemy</h1>
            <div className="bars">
                <div className="hp" id="enemy__hp">HP</div>
            </div>
            <div className="bars">
                <div className="mp" id="enemy__mp">MP</div>
            </div>
        </div>
        </>
    );
}

export default EnemyBars;