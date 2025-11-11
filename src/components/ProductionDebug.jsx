import React, { useState } from 'react';

const ProductionDebug = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [envVars, setEnvVars] = useState({});

  const checkEnvironment = () => {
    setEnvVars({
      NODE_ENV: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL
    });
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => {
          setIsVisible(true);
          checkEnvironment();
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#ff6b6b',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        🐛 Debug
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3>Production Debug</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          ✕
        </button>
      </div>
      
      <div>
        <strong>Environment Variables:</strong>
        {Object.entries(envVars).map(([key, value]) => (
          <div key={key} style={{ margin: '5px 0' }}>
            <strong>{key}:</strong> {value ? '✅ Set' : '❌ Not set'}
            {value && <div style={{ color: '#ccc', fontSize: '10px' }}>{String(value).substring(0, 30)}...</div>}
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <strong>Local Storage:</strong>
        <div style={{ color: '#ccc', fontSize: '10px' }}>
          Form submissions: {localStorage.getItem('formSubmissions') ? '✅ Has data' : '❌ Empty'}
        </div>
      </div>
      
      <button
        onClick={checkEnvironment}
        style={{
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default ProductionDebug;
