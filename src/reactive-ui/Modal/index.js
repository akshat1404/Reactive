import React from 'react'
import Portal from '../Portal'
import './index.css'

function Modal({children, title,titleStyle,modalCloseStyle,modalContentStyle,modalHeaderStyle,modalOverlayStyle,isOpen,actions,actionStyles}) {

    if(!isOpen) return null;

    return (
        <Portal>
            <div style={{...modalOverlayStyle}} className="modal-overlay">
                <div style={{...modalContentStyle}} className="modal-content">
                    <div style={{...modalHeaderStyle}} className="modal-header">
                        {title && <h2 style={{titleStyle}} >{title}</h2>}
                        <button style={{...modalCloseStyle}} className="modal-close"> &times; </button>
                    </div>
                    <div className='modal-children' >
                        {children}
                    </div>
                    <div style={{...actionStyles}} className='modal-actions'>
                        {
                            actions.map((action, index) => (
                                <button key={index} onClick={action.onClick} style={{...action.style}} className="modal-action-button">
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