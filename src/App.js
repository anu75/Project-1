import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyle.css'
import './appStyle.module.css'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import WithCounter from './components/HoverCounter'
import HoverCounterTwo from './components/HoverCounterTwo'
import ClickCounterTwo from './components/ClickCounterTwo'
import User from './components/User'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
     <Todo />
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> 
      <User render={(isLoggedIn)=>isLoggedIn ? "Vishwas" : "Guest"}/>      */}
      {/* <HoverCounter/>
      <ClickCounter name= "Anu"/> */}
      {/* <PortalDemo /> */}
      {/* <Inline/> */}
      {/* <Stylesheet  primary='true'/> */}
      {/* <List/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter ></Counter> */}
      {/* <Message/> */}

      {/* <Greet name = "Rachel" heroName = "Green"/>
      <Welcome name = "Monica" heroName = "Green"/> */}

      {/*<Greet name = "Ross" heroName = "Geller">
      <p>This is Children  props</p>
      </Greet>
      <Greet name = "Joey" heroName = "Tribianni"/>
     
      <Welcome name = "Ross" heroName = "Geller"/>
      <Welcome name = "Joey" heroName = "Tribianni"/> */}
      {/*<Hello/> */}
    </div>
  );
}

export default App;
