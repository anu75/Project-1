import React, { Component } from 'react'

class ClassClick extends Component {

    buttonHandler(){
        console.log('OOOh i am clicked')
    }
    
    render() {        
        return (
            <div>
                <button onClick={this.buttonHandler}>Click Me Button</button>
            </div>
        )
    }
}

export default ClassClick
