import React, {
    Component
} from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            this.state.isLoggedIn && <div> Welcome Anu </div>
        )

        // let message 
        // if(this.state.isLoggedIn){
        //     message =  <div> Welcome Anu </div> 
        // }else{
        //     message = <div> Welcome Guest </div>
        // }

        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return ( 
        //         <div> Welcome Anu </div>
        //     )
        // } else {
        //     return (
        //         <div> Welcome Guest </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Anu</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
