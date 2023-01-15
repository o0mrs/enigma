import React from 'react';

function View({ positions }) {

  return (
    <div>
      {positions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );
}

export default View;