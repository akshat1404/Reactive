import React from 'react';
import './index.css';

function Button({className='primary', title, onClick, style, disabled=false,loading=false,loaderType}) {
    
    return (
        <>
            <button style={{...style}} className={`btn ${className}`} onClick={onClick} >
                {title}
            </button>
        </>
    );
}

export default Button;