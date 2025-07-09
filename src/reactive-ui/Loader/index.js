import React from 'react';
import './index.css';

function Loader(){
    return (
        <div className="loader">
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
        </div>
    );
}

export {Loader};