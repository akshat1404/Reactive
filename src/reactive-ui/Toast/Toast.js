import React, { useState, useEffect, useRef } from 'react';
import './styles/Toast.css';

const Toast = ({ 
  id,
  message, 
  type = 'info', 
  duration = 5000, 
  autoClose = true,
  position = 'top-right',
  onClose,
  createdAt
}) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isPaused, setIsPaused] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const animationRef = useRef();
  const toastRef = useRef();
  const startTimeRef = useRef(Date.now());
  const remainingTimeRef = useRef(duration);

  // Icons for each toast type
  const icons = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕'
  };

  // Handle auto-close
  useEffect(() => {
    if (!autoClose || duration === 0) return;

    const updateRemainingTime = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newRemainingTime = Math.max(0, duration - elapsed);
      
      setRemainingTime(newRemainingTime);
      remainingTimeRef.current = newRemainingTime;

      if (newRemainingTime <= 0) {
        handleClose();
      } else {
        animationRef.current = requestAnimationFrame(updateRemainingTime);
      }
    };

    if (!isPaused) {
      startTimeRef.current = Date.now();
      animationRef.current = requestAnimationFrame(updateRemainingTime);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoClose, duration, isPaused]);

  // Calculate progress percentage
  const progressPercentage = (remainingTime / duration) * 100;

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => {
    if (autoClose) {
      setIsPaused(true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const handleMouseLeave = () => {
    if (autoClose && isPaused) {
      setIsPaused(false);
      startTimeRef.current = Date.now() - (duration - remainingTimeRef.current);
    }
  };

  // Close handler with animation
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match CSS transition duration
  };

  return (
    <div
      ref={toastRef}
      className={`toast toast--${type} ${isExiting ? 'toast--exiting' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
      aria-live="assertive"
    >
      <div className="toast__icon">{icons[type]}</div>
      <div className="toast__content">
        <div className="toast__message">{message}</div>
        {autoClose && duration > 0 && (
          <div className="toast__progress">
            <div 
              className="toast__progress-bar" 
              style={{ 
                width: `${progressPercentage}%`,
                backgroundColor: `var(--toast-${type}-color)`
              }}
            />
          </div>
        )}
      </div>
      <button 
        className="toast__close" 
        onClick={handleClose}
        aria-label="Close toast"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;