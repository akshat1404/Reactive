import React from 'react'
import Portal from '../Portal'
import './index.css'

function Modal({children}) {
  return (
    <Portal>
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Modal Title</h2>
                    <button className="modal-close"> &times; </button>
                </div>
                {children}
            </div>
        </div>
    </Portal>
  )
}

export default Modal