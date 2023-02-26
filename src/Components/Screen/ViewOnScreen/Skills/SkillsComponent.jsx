import React from "react";

import "./skills.css";

function SkillsComponent({skills}){

    return (
        <div className="skills">
            {skills.map((skill, index)=>(
                <div className="">
                    <button className="skill__button">
                        <h2>{skill.name}</h2>
                            <p className="skill__p">ATK : {skill.atk}</p>
                            <p className="skill__p">MPCost : {skill.mpCost}</p>    
                            <p className="skill__p">{skill.drainBlood ? <p className="skill__p">DrainBlood : </p> : null}{skill.drainBlood || ""}</p>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SkillsComponent;