import React, {useCallback, useRef, useState} from 'react'
import { ToastContext } from './ToastContext'
import { ToastContainer } from './ToastContainer';

function ToastProvider({
    children,
    defaultDuration = 5000,
    defaultPosition = 'top-right',
    autoClose = true,
    theme = 'light'
}) {

    const [toasts, setToasts] = useState([]);
    const toastIdRef=useRef(0);

    const addToast = useCallback((message, type='info', options={})=>{

        const id = toastIdRef.current++;
        const duration=options.duration || defaultDuration;
        const position = options.position || defaultPosition;

        const newToast = {
            id,
            message,
            type,
            duration,
            position,
            autoClose: options.autoClose ?? autoClose,
            createdAt: Date.now()
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);

        return id;
    },[autoClose, defaultDuration, defaultPosition]);

    const removeToast = useCallback((id) => {
        setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
    }, []);

    const contextValue = {
        addToast,
        removeToast,
        toasts
    };

    return (
        <ToastContext.Provider value={contextValue} >
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} theme={theme} />
        </ToastContext.Provider>
    )
}

export  {ToastProvider};