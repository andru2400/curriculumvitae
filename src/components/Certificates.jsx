import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
        
            {props.data.map((cer, index) => (
                    <div className="Certificates-item" key={`Cer:-${index}`}>                        
                        <H3Styled>{cer.company}</H3Styled>
                        <PStyled>{cer.jobDescription}</PStyled>
                    </div>            
            ))}  

        </div>
    </div>
);

export default Certificates;