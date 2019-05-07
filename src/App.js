import React, {Component} from 'react';

import List from "./cards"
import Cards from "./Components/Cards"
import Nav from "./Components/Nav"
import Rule from "./Components/Rule"
import Modal from "./Components/Modal"


const styleBody = {
  backgroundColor: "rgb(120, 132, 30)"
}


class App extends Component{

state = {
  score:0,
  hightestScore: 0,
  List: List,
  shuffledArray:[],
  showModal: false
}




showModal = ()=> {
  // eslint-disable-next-line no-unused-expressions
  <Modal />
}

ClickHandler = (e)=>{
 

  return  (

    
    
    this.setState({List: this.state.List.sort(() => Math.random() - 0.5)}),
    console.log(e.target.getAttribute("data-index")),
   
  

   //this will add in array
    this.setState({shuffledArray: [...this.state.shuffledArray,e.target.getAttribute("data-index")]}),

    

    //Something to check in array and updating the score
    console.log(this.state.shuffledArray.includes(e.target.getAttribute("data-index"))),
    !this.state.shuffledArray.includes(e.target.getAttribute("data-index"))?
    ( this.setState({shuffledArray: [...this.state.shuffledArray,e.target.getAttribute("data-index")]}),
    this.setState({ score: this.state.score + 1 })):

   (this.setState({showModal: true}),
     this.setState({ score: 0 }),
   this.setState({shuffledArray: []}),
   
    this.state.hightestScore<this.state.score?
   this.setState({hightestScore:this.state.score}):console.log("score not updated")
   ),

  
   console.log(this.state)
  
     

  )
}





  render(){
  return(<div style = {styleBody}>
    <Nav score={this.state.score} highScore = {this.state.hightestScore}/>
    <Rule />
   
    {this.state.List.map(item=>(<Cards name={item.name} image={item.image} function={this.ClickHandler} id={item.id} key={item.id}/>))}
   
   </div>)
  }
}

export default App;
