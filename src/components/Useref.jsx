import React from 'react'
import { useState, useEffect, useRef } from "react";

const Useref = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <div>
            <div className='container mx-auto py-5'>
                <div className="d-flex flex-column align-items-center">
                    <h1 className='text-center mb-0 text-danger'>Useref</h1>
                    <input
                        type="text"
                        value={inputValue}
                        className='mt-4'
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <h2>Render Count: {count.current}</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Useref