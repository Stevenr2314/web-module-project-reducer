import React, { memo, useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, updateMemory} from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = number => applyNumber(number)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(updateMemory())}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatch(handleClick(1))}/>
              <CalcButton value={2} onClick={() => dispatch(handleClick(2))}/>
              <CalcButton value={3} onClick={() => dispatch(handleClick(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(handleClick(4))}/>
              <CalcButton value={5} onClick={() => dispatch(handleClick(5))}/>
              <CalcButton value={6} onClick={() => dispatch(handleClick(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(handleClick(7))}/>
              <CalcButton value={8} onClick={() => dispatch(handleClick(8))}/>
              <CalcButton value={9} onClick={() => dispatch(handleClick(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(changeOperation('+'))}/>
              <CalcButton value={"*"} onClick={() => dispatch(changeOperation('*'))}/>
              <CalcButton value={"-"} onClick={() => dispatch(changeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
