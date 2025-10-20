
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="position-relative w-100 overflow-hidden rounded-pill"
      style={{ height: '0.5rem', backgroundColor: '#2F323B' }}
    >
      <div
        data-slot="progress-indicator"
        className="position-absolute top-0 start-0 h-100"
        style={{
          width: `${progress}%`,
          backgroundColor: '#1ED642',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;