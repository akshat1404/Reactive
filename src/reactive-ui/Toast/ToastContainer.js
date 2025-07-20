import React from 'react';
import Toast from './Toast';
import './styles/Toast.css';
import './styles/themes/light.css'; // Default theme
import './styles/themes/dark.css'; // Dark theme

const positionClasses = {
  'top-right': 'toast-container--top-right',
  'top-left': 'toast-container--top-left',
  'bottom-right': 'toast-container--bottom-right',
  'bottom-left': 'toast-container--bottom-left',
  'top-center': 'toast-container--top-center',
  'bottom-center': 'toast-container--bottom-center'
};

export const ToastContainer = ({ toasts, removeToast, theme = 'light' }) => {

    const groupedToasts = toasts.reduce((acc, toast) => {
      const position = toast.position || 'top-right';
      if (!acc[position]) acc[position] = [];
      acc[position].push(toast);
      return acc;
    }, {});

  return (
    <>
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div 
          key={position}
          className={`toast-container ${positionClasses[position]} toast-theme--${theme}`}
        >
          {positionToasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      ))}
    </>
  );
};