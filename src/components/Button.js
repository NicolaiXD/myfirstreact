import React from "react";

//class component - stateful component
class Button extends React.Component{
    
    constructor(){  
        super()
        this.state = {
            count : 0
        }
    }
    
    addCounter = () => {
        this.setState(
                {
                    count : this.state.count + 1
                }
        )
    }
    
    render(){
        return(
                <div>
                    <button onClick ={this.addCounter}>Click this button</button>
                    <p>counts = {this.state.count}</p>
                </div>        
        )
    }
    
}

export default Button

