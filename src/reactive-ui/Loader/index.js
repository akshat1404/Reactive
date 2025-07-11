import './index.css'; 

export const BounceLoader = ({ color = '#000', size = 'md', dotCount = 3 }) => {
  const sizes = { sm: 6, md: 8, lg: 10 };
  return (
    <div className="bounce-loader">
      {[...Array(dotCount)].map((_, i) => (
        <div 
          key={i}
          className="bounce-dot"
          style={{
            width: sizes[size],
            height: sizes[size],
            backgroundColor: color,
            animationDelay: `${i * -0.16}s`
          }}
        />
      ))}
    </div>
  );
};

export const Spinner = ({ 
  color = '#000', 
  size = 'md', 
  thickness = '2px' 
}) => {
  const sizes = { sm: 16, md: 24, lg: 32 };
  return (
    <div 
      className="spinner"
      style={{
        width: sizes[size],
        height: sizes[size],
        borderColor: color,
        borderWidth: thickness,
        borderTopColor: 'transparent'
      }}
    />
  );
};

export const ProgressLoader = ({ 
  color = '#3b82f6', 
  height = '4px',
  duration = '2s'
}) => (
  <div className="progress-loader" style={{ height }}>
    <div 
      className="progress-loader-bar" 
      style={{ 
        backgroundColor: color,
        animationDuration: duration 
      }}
    />
  </div>
);

export const WaveLoader = ({ color = '#000', size = 'md' }) => {
  const sizes = { sm: 6, md: 8, lg: 10 };
  return (
    <div className="wave-loader">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="wave-dot"
          style={{
            width: sizes[size],
            height: sizes[size],
            backgroundColor: color,
            animationDelay: `${i * -0.16}s`
          }}
        />
      ))}
    </div>
  );
};

export const ClassicSpinner = ({ 
  color = '#000', 
  size = 'md',
  trackColor = 'rgba(0,0,0,0.1)'
}) => {
  const sizes = { sm: 16, md: 24, lg: 32 };
  return (
    <div 
      className="classic-spinner"
      style={{
        width: sizes[size],
        height: sizes[size],
        borderColor: trackColor,
        borderTopColor: color
      }}
    />
  );
};

export const StepsLoader = ({ 
  color = '#3b82f6', 
  count = 5,
  height = '16px'
}) => (
  <div className="steps-loader">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="step"
        style={{
          height,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
);

export const NeonLoader = ({ 
  color = '#08f',
  size = 'md',
  intensity = 'medium'
}) => {
  const sizes = { sm: 8, md: 12, lg: 16 };
  const glowIntensity = {
    low: '0 0 5px',
    medium: '0 0 10px, 0 0 20px',
    high: '0 0 15px, 0 0 30px'
  };
  return (
    <div 
      className="neon-loader"
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: color,
        boxShadow: `${glowIntensity[intensity]} ${color}`
      }}
    />
  );
};

export const SkeletonLoader = ({ 
  width = '100%',
  height = '20px',
  borderRadius = '4px'
}) => (
  <div 
    className="skeleton-loader" 
    style={{ width, height, borderRadius }}
  />
);

const Loader = ({
  type = 'bounce',
  ...props
}) => {
  const loaders = {
    bounce: <BounceLoader {...props} />,
    spinner: <Spinner {...props} />,
    progress: <ProgressLoader {...props} />,
    wave: <WaveLoader {...props} />,
    classic: <ClassicSpinner {...props} />,
    steps: <StepsLoader {...props} />,
    neon: <NeonLoader {...props} />,
    skeleton: <SkeletonLoader {...props} />
  };
  
  return loaders[type] || <BounceLoader {...props} />;
};

export default Loader;