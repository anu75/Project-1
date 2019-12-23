import React from 'react'

// function Greet(){
//     return <h1>Hello Anshuti </h1>
// }

// const Greet = (props) => {
//     console.log(props)
//     return(
//         <div>
//     <h1> Hello {props.name} {props.heroName} </h1>
//     {props.children}
//     </div>
//     )
// }

//For Destructuring


const Greet = (props) => {
    const { name, heroName } = props
    return(
        <div>
    <h1> Hello {name} {heroName} </h1>
    </div>
    )
}


export default Greet