import Button from "../components/Button"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

    return (
        <>        
          <Button  label="Increment" value="Increment" handleClick={()=>dispatch(increment())} /> 
          <Button  label="Decrement" value="Decrement" handleClick={()=>dispatch(decrement())} />
          <span>{count}</span>

        </>
      
    )
}

export default Counter;