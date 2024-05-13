import React from 'react';
import { ModelAdd } from './ModelAdd';
import './un.css'


export const Herosection = () => {
    return (
        <>
            <div className="section">
                <div className="max-w-container ">
                    <h1 className="title ">Angel Reyes</h1>

                    <p className="subtitle ">Blog de Angel Reyes</p>
                    <div className="button ">
                        <ModelAdd />
                    </div>
                </div>
            </div>
        </>
    );
};

