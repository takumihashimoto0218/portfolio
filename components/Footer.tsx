import React from 'react';

const footerStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; 2023 takumi hashimoto
    </footer>
  );
};

export default Footer;