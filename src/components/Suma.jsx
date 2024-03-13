import React, { useState } from 'react';

export const Suma = () => {

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('');


    return (
        <>
            <div className="form-control">
                <div className="mb-2">
                    <div className="row">
                        <div className="col-2">
                            <label className='form-label'> Valor 1:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" id='txtN1' className='form-control' value={n1} onChange={(e) => setN1(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-2">
                            <label className='form-label'> Valor 2:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" id='txtN2' className='form-control' value={n2} onChange={(e) => setN2(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-2">
                            <label className='form-label'> Resultado: </label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id='resultado' className='form-control' readOnly value={resultado} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
