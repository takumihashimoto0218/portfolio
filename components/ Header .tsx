import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'white',
    color: 'black',
    padding: '20px',
    fontSize: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={headerStyle}>
      ポートフォリオ
    </div>
  );
};

export default Header;
