import React, { useReducer } from 'react';
import { useState } from 'react';
import { COLOR_ACT } from './Cnstants/color-acts';

const initialState = {
  red: 0,
  green: 0, 
  blue: 0,
}





const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_ACT.INC_RED:
      return {
        ...state,
        red: Math.min(state.red + 1, 255),
      };
    case COLOR_ACT.DEC_RED:
      return {
        ...state,
        red: Math.max(state.red - 1, 0),
      };
    case COLOR_ACT.INC_GREEN:
      return {
        ...state,
        green: Math.min(state.green + 1, 255),
      };
    case COLOR_ACT.DEC_GREEN:
      return {
        ...state,
        green: Math.max(state.green - 1, 0),
      };
    case COLOR_ACT.INC_BLUE:
      return {
        ...state,
        blue: Math.min(state.blue + 1, 255),
      };
    case COLOR_ACT.DEC_BLUE:
      return {
        ...state,
        blue: Math.max(state.blue - 1, 0),
      };
    default:
      return state;
  }
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {red, blue, green} = state;
  return (
    <div className='box'>
      <div className="box-cont" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }}></div>
      <main>

      <div className='btn-cont'>
        <p>Red:{state.red}</p>
        <div className='btn-box'>
          <button onClick={() => {
            dispatch({type: "INC-RED"})
          }}>+1</button>


          <button onClick={() => {
            dispatch({type: "DEC-RED"})
          }}>-1</button>
        </div>
      </div>
      <div className='btn-cont'>
        <p>Green:{state.green}</p>
        <div className='btn-box'>
          <button onClick={() => {
            dispatch({type: "INC-GREEN"})
          }}>+1</button>


          <button onClick={() => {
            dispatch({type: "DEC-GREEN"})
          }}>-1</button>
        </div>
      </div>
      <div className='btn-cont'>
        <p>Blue:{state.blue}</p>
        <div className='btn-box'>
          <button onClick={() => {
            dispatch({type: "INC-BLUE"})
          }}>+1</button>


          <button onClick={() => {
            dispatch({type: "DEC-BLUE"})
          }}>-1</button>
        </div>
      </div>
      </main>
    </div>
  )
}

export default App