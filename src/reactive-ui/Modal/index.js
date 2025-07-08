import React, { useEffect } from 'react'
import Portal from '../Portal'
import './index.css'

function Modal({children, title,titleStyle,modalCloseStyle,modalContentStyle,modalHeaderStyle,modalOverlayStyle,isOpen,actions,actionStyles,onClose,submitButtonOnEnter='Submit'}) {

    useEffect(()=>{

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }

            if(event.key === 'Enter' && submitButtonOnEnter){
                const submitButton = document.getElementById(`modal-action-${submitButtonOnEnter}`);
                if(submitButton){
                    submitButton.click();
                }
            }
        }

        if(isOpen){
            window.addEventListener('keydown',handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown',handleKeyDown);
        }

    },[isOpen]);

    if(!isOpen) return null;

    return (
        <Portal>
            <div style={{...modalOverlayStyle}} className="modal-overlay">
                <div style={{...modalContentStyle}} className="modal-content">
                    <div style={{...modalHeaderStyle}} className="modal-header">
                        {title && <h2 style={{titleStyle}} >{title}</h2>}
                        <button onClick={onClose} style={{...modalCloseStyle}} className="modal-close"> &times; </button>
                    </div>
                    <div className='modal-children' >
                        {children}
                    </div>
                    <div style={{...actionStyles}} className='modal-actions'>
                        {
                            actions.map((action, index) => (
                                <button key={index} onClick={action.onClick} style={{...action.style}} id={`modal-action-${action.label}`} className="modal-action-button">
                                    {action.label}
                                </button>
                            ))
                        }   
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal;