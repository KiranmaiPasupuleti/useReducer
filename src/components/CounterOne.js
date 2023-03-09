import React,{useReducer} from 'react'

const initialState = 0 
const reducer = (state,action) => {
    switch(action) {
        case "+":
            return state + 1 
        case "-":
            return state - 1 
        case "Reset":
            return initialState 
        default:
            return state
    }
}

function CounterOne() {

    const [count,dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatch('+')} >+</button>
        <button onClick={() => dispatch("-")} >-</button>
        <button onClick={() => dispatch("Reset")} >Reset</button>
    </div>
  )
}

export default CounterOne