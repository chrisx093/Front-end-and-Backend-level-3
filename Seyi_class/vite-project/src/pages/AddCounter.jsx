
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, increaseAmount } from '../app/counterSlice'

const AddCounter = () => {

  let counter = useSelector((num)=> num.counter.value)
  let trigger = useDispatch()
  return (
    <>
<h5>Counter Screen</h5>
<section>
  <h2>{counter}</h2>
  <div style={{display: 'flex', gap:'10px'}}>

    <button onClick={()=> trigger (increment())}>+</button>
    <button onClick={()=> trigger (decrement())}>-</button>
    <button onClick={()=>trigger (increaseAmount(5))}>increase Amount</button>
  </div>
</section>
    </>
  )
}

export default AddCounter