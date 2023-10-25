import React, { CSSProperties } from 'react';
import Link from 'next/link';

const Header = () => {
  const headerStyle: CSSProperties = {
    background: 'black',
    color: 'white',
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
      <Link href="/">takumiのポートフォリオ</Link>
    </div>
  );
};

export default Header;
