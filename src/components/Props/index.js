import React from 'react';

// Props Received

//React Class Component
// export class PropsReceiver extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.heading}</h1>
//             </div>
//         )
//     }
// }

//React Functional Component 

export const PropsReceiver = (props)=>{
    return(
        <div>
            <h1>{props.heading}</h1>
        </div>
    )
}