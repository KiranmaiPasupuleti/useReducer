import React,{useReducer} from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state,action) => {
    switch(action.type) {
        case "increment":
            return {...state, firstCounter : state.firstCounter + action.value } 
        case "decrement":
            return {...state, firstCounter : state.firstCounter - action.value }
        case "increment2":
            return {...state, secondCounter : state.secondCounter + action.value } 
        case "decrement2":
            return {...state, secondCounter : state.secondCounter - action.value }
        case "reset":
            return initialState 
        default:
            return state
    }
}

function CounterTwo() {

    const [count,dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        <div>First Count: {count.firstCounter}</div>
        <div> second Count: {count.secondCounter}</div>
        <button onClick={() => dispatch({type: "increment" , value:1})} > Increase 1 </button>
        <button onClick={() => dispatch({type: "decrement", value:1})} > Decrease 1 </button>
        <button onClick={() => dispatch({type: "increment" , value:5})} > Increase 5 </button>
        <button onClick={() => dispatch({type: "decrement", value:5})} > Decrese 5 </button>
        <button onClick={() => dispatch({type: "reset"})} >Reset</button>

        <div>
        <button onClick={() => dispatch({type: "increment2" , value:1})} > Increase counter 2 </button>
        <button onClick={() => dispatch({type: "decrement2", value:1})} > Decrease counter 2 </button>
        </div>
    </div>
  )
}

export default CounterTwo