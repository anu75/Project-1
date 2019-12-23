import React, { Component } from 'react'
import TodoEntries from './TodoEntries'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
             items: [],
                          
        }
    }
     // change code below this line
        handleInputChange = this.handleInputChange.bind(this)
        addItem=this.addItem.bind(this)
        deleteItems=this.deleteItems.bind(this)

        handleInputChange(event){
        this.setState({myValue:event.target.value})
        //console.log(this.state.myValue)
    }

    addItem(event) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }


            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })
            
        }
        
        this._inputElement.value=""

        console.log(this.state.items)

        event.preventDefault()
    }

    deleteItems(key){
        var filteredItem = this.state.items.filter((items)=>(items.key !== key)  )
        this.setState({
            items: filteredItem
        })
    }
    
    render() {
        return (
          <>
            <div className="container">
                <div className="header">
                    <input type="text"
                    onChange={this.handleInputChange}
                    ref={(a) => this._inputElement = a} placeholder = "Add Items"></input>
                    <button onClick={this.addItem}>Add Items to the list</button><br/>
                    <TodoEntries entries ={this.state.items} delete={this.deleteItems}/>
                </div>
            </div>
          </>
        );
    }
}

export default Todo
