import React from 'react';

import './MarioBox.css';

const MarioBox = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div className={`MarioBox ${className || ''}`} {...rest}>
      <div className="pattern"></div>
      <div className="gradient-overlay"></div>
      {children}
    </div>
  );
}

export default MarioBox;
