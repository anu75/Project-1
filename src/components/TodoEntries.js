import React, { Component } from 'react'
import './TodoEntries.css'

class TodoEntries extends Component {
    constructor(props) {
        super(props)
        this.createTask= this.createTask.bind(this)
        this.state = {
             
        }
    }
    
    createTask(items){
        return (
            <div>
                <li key={items.key} 
                onClick={()=>this.delete(items.key)}>{items.text}</li>
            </div>
        )
    }

    delete(key){
        this.props.delete(key)
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask)
        return (
            <>
                <ul className="thelist">
                    {listItems}
                </ul>
            </>
        )
    }
}

export default TodoEntries
