import React, { useEffect, useRef } from 'react';
import './index.css';
import Loader from '../Loader';
import { debounce } from '../Utils';

function Button({className='primary', title, onClick, style, disabled=false, loading=false, loaderType="wave", debounce=false,debounceDelay=300}) {

    let CLICK=useRef(onClick);

    useEffect(()=>{

        if(debounce){
            CLICK.current = debounce(onClick, debounceDelay);
        }
    },[]);

    return (
        <>
            <button disabled={disabled || loading} style={{...style}} className={`btn ${className}`} onClick={CLICK.current} >
                {loading ? <Loader color="white" type={loaderType} /> : title}
            </button>
        </>
    );
}

export default Button;