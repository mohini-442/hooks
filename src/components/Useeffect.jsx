import { useEffect } from "react";
import React, { useState } from 'react'

const Useeffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return (
        <>
            <div className='container mx-auto py-5'>
                <div className="d-flex flex-column align-items-center">
                    <h1 className='text-center mb-0 text-danger'>Useeffect</h1>
                    <h2 className="pt-3">I've rendered {count} times! </h2>
                </div>
            </div>
        </>
    )
}

export default Useeffect