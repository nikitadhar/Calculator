import React, { useState } from 'react'
import "./UI.css"

export default function UI() {
  let [result,setResult]=useState("");
  const handleClick=(e)=>{
    setResult(result.concat(e.target.name))}
  const clear=()=>{
    setResult("")}
    const backSpace=(e)=>{
    setResult(result.slice(0,-1));
    }
      const calculate=()=>{
        // eslint-disable-next-line
        setResult(eval(result))
      }
  
  return (<>
 <div id="main-container">
 <form>
        <input type="text" value={result}/>
      </form>  
      <div className='keypad'>
      
        <button onClick={clear} id="clear" className="highlight" >clear</button>
      <button onClick={backSpace} name="C" className="highlight">C</button> 
        <button onClick={handleClick} className="highlight" name="+" >+</button>
      <button onClick={handleClick}  name="7" >7</button>
        <button onClick={handleClick} name="8" >8</button>
        <button onClick={handleClick} name="9" >9</button>
        <button onClick={handleClick}className="highlight" name="-" >-</button>
        <button onClick={handleClick} name="4" >4</button>
        <button onClick={handleClick} name="5" >5</button>
        <button onClick={handleClick} name="6" >6</button>
        <button onClick={handleClick} className="highlight" name="*" >*</button>
        <button onClick={handleClick}  name="1" >1</button>
        <button onClick={handleClick} name="2" >2</button>
        <button onClick={handleClick} name="3" >3</button>
        <button onClick={handleClick} className="highlight"name="/" >/</button>
        <button  onClick={handleClick}  name="." >.</button>
        <button onClick={handleClick}   name="0" >0</button>
        <button   onClick={calculate}id="equal" className="highlight" name="=" >=</button>
         


      </div>
        
        
        
         </div>
 
  
 </> )
}
