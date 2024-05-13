import React from 'react';
import { useReducer } from 'react'
import '../../counter.css'

const Counter = () => {
    const[state, dispatch] = useReducer(reducerFunction, initialValue);
    
function handleAdd(){
    dispatch({
        type:'Add',
        payload:6
    })
}

function handleSub(){
    dispatch({
        type:'Sub',
        payload:3
    })
}
    function reducerFunction(state, action){
switch(action.type){
    case 'Add':{
        return(state+action.payload)
    }
    case 'Sub':{
        return (state-action.payload)
    }
    default:{
        throw Error('unknown action type')
    }
}
    }
    return (
        <div>
            <h4>useReducer</h4>
            <p>{state}</p>
            <div className="button">
            <button className='add' onClick={handleAdd}>Add</button>
            <button className='sub' onClick={handleSub}>Sub</button>
            </div>
            <p className='author'>SRI VATSAN</p>
        </div>
    );

};
let initialValue = 0;

export default Counter;