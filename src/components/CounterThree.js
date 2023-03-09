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

function CounterThree() {

    const [count,dispatch] =useReducer(reducer,initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <div>
    <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatch('+')} >+</button>
        <button onClick={() => dispatch("-")} >-</button>
        <button onClick={() => dispatch("Reset")} >Reset</button>
    </div>
    <div>
        <div>Count: {countTwo}</div>
        <button onClick={() => dispatchTwo('+')} >+</button>
        <button onClick={() => dispatchTwo("-")} >-</button>
        <button onClick={() => dispatchTwo("Reset")} >Reset</button>
    
    </div>
    </div>
  )
}

export default CounterThree