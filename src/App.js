import React from "react";

import { INCREASE_NUM, DECREASE_NUM } from "./redux/actions";
import { useDispatch, useSelector} from 'react-redux';

import { store } from "./redux/store";

const App =() => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.value)

  const onIncrement = () => {
    dispatch(INCREASE_NUM);
  }

  const onDecrement = () => {
    dispatch(DECREASE_NUM);
  }

  console.log('all store', store.getState()); 





  return (
    <>
    <h1>{counter}</h1>
   <button onClick={onIncrement }>+</button>
    <button onClick={onDecrement}>-</button> 
    </>
  )
}

export default App;