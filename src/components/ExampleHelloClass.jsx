// import React, { Component } from 'react';

// class ExampleHelloClass extends Component {

//     state = {
//         active: true,
//     }

//     handleClick = () => {
//         this.setState({
//             active: !this.state.active,
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick} >Ocultar</button>
//                 {this.state.active &&
//                     <h1>Hola Mundo</h1>
//                 }                
//             </div>
//         );
//     }
// }

import React, { useState } from 'react';

const ExampleHelloClass = () => {

    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
     }

    return(
        <div>
            <button onClick={handleClick} >Ocultar</button>
            {active &&
                <h1>Hola Mundo 2</h1>
            }             
        </div>
        
    );
}

export default ExampleHelloClass;