import { BaseProps } from '../types'
import { useState } from 'react'

export default function StateDemo1({ title }: BaseProps) {
    const [count, setCount] = useState(0)

    function increment() {
        setCount((previousValue) => previousValue + 1)
    }

    function decrement() {
        setCount((previousValue) => previousValue - 1)
    }

    return (
        <>
            <h2>{title}</h2>
            <button
                onClick={() => {
                    increment()
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    decrement()
                }}
            >
                {' '}
                Decrement
            </button>
            <h3>{count}</h3>
        </>
    )
}
