
"use client"

import React from "react"
import {useState} from "react"

const page =() =>{

  const [number1, setNumber1]= useState(2)
  const [number2, setNumber2]= useState(23)
  const [result, setResult]= useState(0)

  const add= () =>{
    setResult(number1 + number2)
  }

  const subtract= ()=>{
    setResult(number1 - number2)
  }

  const multiply= ()=>{
    setResult(number1 * number2)
  }

  return(
    <div>
      
      <p>Number1: {number1}</p>
      <p>Number2: {number2}</p>
      <p>Result: {result}</p>

      <button onClick={add}>+</button>
      <br/>
      <button onClick={subtract}>-</button>
      <br/>
      <button onClick={multiply}>*</button>

    </div>
  )
}

export default page