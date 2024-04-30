import React, { useState } from 'react'

const Usestate = () => {
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(19)
    const handleClick = () => setAge(age + 1)
    return (
        <div>
            <div className='container mx-auto py-5'>
                <h1 className='text-center mb-0 text-danger'>Usestate</h1>
                <h2 className='text-center pt-3'>My favorite color is {color}!</h2>
                <div className='mx-auto d-flex justify-content-center'>
                    <button
                        type="button"
                        onClick={() => setColor("blue")}
                    >Blue</button>
                    <button
                        type="button"
                        onClick={() => setColor("red")}
                    >Red</button>
                    <button
                        type="button"
                        onClick={() => setColor("pink")}
                    >Pink</button>
                    <button
                        type="button"
                        onClick={() => setColor("green")}
                    >Green</button>
                </div>
                <div className='d-flex flex-column  align-items-center mx-auto pt-4'>
                    <h3>You clicked {count} times</h3>
                    <button className='btn-1' onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
                <div className='d-flex flex-column  align-items-center mx-auto pt-4'>
                    <h3> Today I am {age} Years of Age</h3>
                    <div>
                        <button className='btn-1' onClick={handleClick}>Get older! </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usestate