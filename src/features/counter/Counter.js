
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'

import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) 

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset());
    }

    return (
        <div>
            <div>
                <button className="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>   
                <span className="value">{count}</span>
                <button className="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                
                <input type='text' value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} />
                <div>
                    <button className="button" aria-label="Increment value" onClick={() => dispatch(incrementByAmount(addValue))}>
                        Increment by amount
                    </button>
                    <button className="button" aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(-addValue))}>
                        Decrement by amount
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Counter

