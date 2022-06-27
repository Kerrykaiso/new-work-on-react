import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {nanoid} from "nanoid"

import ".//style.css"
function Die(prop){
 const styles={
    backgroundColor: prop.isHeld===true ? "green":"white"
  }
  return(
    <div className='die' style={styles} onClick={prop.holdDice}>
       <h2>{prop.value}</h2>
    </div>
     
  )
  
 }
function About (){
  const [old,  fresh] = React.useState(random())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(function () {
   const allSame = old.every(die=>die.isHeld)
   const firstValue = old[0].fig
   const same = old.every(die=>die.fig===firstValue)
   if(allSame && same){
     setTenzies(true)
    console.log("dice changed")

   }
  },[old])
  
  function random(){
    let newDice=[]
    for(let i=0; i<10; i++){
     newDice.push({
       fig:Math.ceil(Math.random()*6 ),
       isHeld: false,
       id:nanoid()
    })
    }
    
    return newDice
  }
  function reRun(){
    
    if (!tenzies) {
      fresh(function (newRoll) {
        return newRoll.map(function (steady) {
          return steady.isHeld ? steady : {
            fig:Math.ceil(Math.random()*6 ),
            isHeld: false,
            id:nanoid()
         }
        })
      })
    }
     else{
       setTenzies(false)
       fresh(random())
     }
  }

  function holdDice(id) {
   fresh(function (prev) {
      return prev.map(function(prev2){
        return prev2.id===id ? {...prev2, isHeld:!prev2.isHeld} : prev2
      
        
      })
   })
  }
  const diceElement =old.map(
    function(num){
      return <Die value={num.fig} isHeld={num.isHeld} key={num.id}  holdDice={()=>holdDice(num.id)}/>
    }
  )
  return(
    <div className='main'>
      <h1 className='gameName'>TENZIES</h1>
      <p className='subTitle'>Roll until all the dice are the same. Click each die to freeze.</p>
     <div className='dice'>
     {diceElement}
     </div>
    <button onClick={reRun} className="button">{tenzies ? "new game":"Roll"}</button>
    </div>
  )
}


   

ReactDOM.render(<About />, document.getElementById("root"))

