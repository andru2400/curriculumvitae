import React from 'react';

const Social = props => (
    <div className="Social">
        <div className="Social-container">
            {props.social&&
                <ul>
                    {props.social.map((item, index) => (
                        <li key={`Soc-${index}`} target="_blank">
                            <a href={item.url}>
                                {item.name}                                          
                            </a>    
                        </li>                        
                    ))}
                </ul>
            }                 
        </div>               
    </div>
);

export default Social;