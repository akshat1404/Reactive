import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css'; 

const Tooltip = ({
  children,
  content,
  position = 'top',
  animation = 'fade',
  delay = 100,
  trigger = 'hover',
  arrow = true,
  className = '',
  style = {},
  contentClassName = '',
  contentStyle = {},
  disabled = false,
  interactive = false,
  maxWidth = 200,
  onShow = () => {},
  onHide = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [calculatedPosition, setCalculatedPosition] = useState(position);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  let showTimeout;
  let hideTimeout;

  const calculatePosition = () => {
    if (position !== 'auto') {
      setCalculatedPosition(position);
      return;
    }

    if (!tooltipRef.current || !triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const positions = ['top', 'right', 'bottom', 'left'];
    const spaceAvailable = {
      top: triggerRect.top,
      right: viewportWidth - triggerRect.right,
      bottom: viewportHeight - triggerRect.bottom,
      left: triggerRect.left,
    };

    let bestPosition = position;
    let maxSpace = -1;

    positions.forEach(pos => {
      if (spaceAvailable[pos] > maxSpace) {
        maxSpace = spaceAvailable[pos];
        bestPosition = pos;
      }
    });

    setCalculatedPosition(bestPosition);
  };

  const showTooltip = () => {
    if (disabled) return;
    clearTimeout(hideTimeout);
    calculatePosition();
    showTimeout = setTimeout(() => {
      setIsVisible(true);
      onShow();
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
      setIsVisible(false);
      onHide();
    }, delay);
  };

  const eventHandlers = {
    hover: {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    },
    click: {
      onClick: () => (isVisible ? hideTooltip() : showTooltip()),
    },
    focus: {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    },
  };

  useEffect(() => {
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className={`reactive-ui-tooltip-trigger ${className}`}
      style={style}
      {...eventHandlers[trigger]}
      aria-describedby={isVisible ? 'tooltip-content' : undefined}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          id="tooltip-content"
          role="tooltip"
          className={`reactive-ui-tooltip ${contentClassName} ${animation} ${calculatedPosition}`}
          style={{
            maxWidth: `${maxWidth}px`,
            pointerEvents: interactive ? 'auto' : 'none',
            ...contentStyle,
          }}
          onMouseEnter={interactive ? showTooltip : undefined}
          onMouseLeave={interactive ? hideTooltip : undefined}
        >
          {content}
          {arrow && <span className="reactive-ui-tooltip-arrow" />}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'auto']),
  animation: PropTypes.oneOf(['fade', 'slide', 'scale', 'none']),
  delay: PropTypes.number,
  trigger: PropTypes.oneOf(['hover', 'click', 'focus', 'manual']),
  arrow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  disabled: PropTypes.bool,
  interactive: PropTypes.bool,
  maxWidth: PropTypes.number,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
};

export default Tooltip;