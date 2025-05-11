import React from 'react';
import githubIcon from "./githubIcon.png";

const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      textAlign: 'center',
      padding: '10px 0',
      background: '#f39bd1',
      fontWeight: 'bold',
      fontSize: '12px',
      borderTop: '2px solid #f39bd1',
      borderTopRightRadius: '70px',
      marginTop: "30px",
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0' 
      }}>
        <a href="https://github.com/HannaVlasenko2105" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Посилання на гітхаб" style={{ width: '40px', height: '40px' }} />
        </a>
        <p style={{ margin: 0 }}>@HannaVlasenko</p>
      </div>
    </footer>
  );
};

export default Footer;
