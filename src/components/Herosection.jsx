import React from 'react';
import { ModelAdd } from './ModelAdd';
import './un.css'


export const Herosection = () => {
    return (
        <>
            <div className="section">
                <div className="max-w-container ">
                    <h1 className="title ">Derick Sanchez</h1>

                    <p className="subtitle ">Blog de Derick Sanchez</p>
                    <div className="button ">
                        <ModelAdd />
                    </div>
                </div>
            </div>
        </>
    );
};

