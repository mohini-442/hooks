import React from 'react'
import { useState, useEffect, useRef } from "react";

const Useref = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
   
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <div>
            <div className='container mx-auto py-5'>
                <div className="d-flex flex-column align-items-center">
                    <h1 className='text-center mb-0 text-danger'>Useref</h1>
                    <h4 className='mt-4'>render count</h4>
                    <input
                        type="text"
                        value={inputValue}
                    
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <h2>Render Count: {count.current}</h2>
                    <h4 className='mt-4'>click counter</h4>
                    <button className='btn-1' onClick={handleClick}>
                        Click me!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Useref