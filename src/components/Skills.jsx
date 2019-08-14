import React from 'react';

const Skills = props => (
    <div className="Skills">
        <div className="Skills-container">

            {props.data.map((ski, index) => (
                <div className="Skills-item" key={`Ski_-${index}`}>
                    <h5>{ski.name}</h5>
                    <div className="Skills-line">
                        <span>{ski.percentage}</span>
                    </div>                
                </div>
            ))}

        </div>
    </div>
);

export default Skills;