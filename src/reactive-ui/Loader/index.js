import React from 'react';
import './index.css';

function Loader({loaderStyle, style}) {
    return (
        <div style={{...loaderStyle}} className="loader">
            <div style={{...style}} className="loader-dot" />
            <div style={{...style}} className="loader-dot" />
            <div style={{...style}} className="loader-dot" />
        </div>
    );
}

function Spinner({style}) {
    return (
        <div style={{...style}} className='spinner' ></div>
    );
}

export {Loader, Spinner};