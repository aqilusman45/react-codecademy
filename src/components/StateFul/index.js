import React from 'react';

//This is a stateful component 
export class StatefulComp extends React.Component{
    //As constructor is the first function
    //to run as the class/component is called
    //constructor sets the initial state
    constructor(props){
        super(props)
        //objects are passed as the state of the component
        this.state= {
            name: 'James',
            nationality: 'Pakistani',
        };
    }

    render(){
        //We will use the state in this render
        return(
            <div>
                <h4>
                    {this.state.name}
                </h4>
                <h5>
                    {this.state.nationality}
                </h5>
            </div>
        )
    }
}