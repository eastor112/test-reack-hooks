import React from 'react'
import Hijo from './Hijo'
import { useState, useCallback } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }

    const incrementar = useCallback((num) => {
        setValor(prev => prev + num)
    }, [setValor])


    return (
        <div className='container'>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />
            <div style={{ display: 'flex', gap: '20px' }}>

                {
                    numeros.map(n => (
                        <Hijo
                            key={n}
                            numero={n}
                            incrementar={incrementar}
                        />
                    ))
                }

            </div>
            {/* <Hijo /> */}
        </div>
    )
}
