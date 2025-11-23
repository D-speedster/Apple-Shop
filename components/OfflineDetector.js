import { useState, useEffect } from 'react';

export default function OfflineDetector() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e72323',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        zIndex: 9999,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)'
      }}
    >
      <i className="fa-solid fa-wifi-slash me-2"></i>
      اتصال اینترنت قطع شده است. لطفا اتصال خود را بررسی کنید.
    </div>
  );
}
