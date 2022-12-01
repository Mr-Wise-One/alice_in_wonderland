import { useEffect, useState } from 'react';

export default function useClientSystem() {
  const [clientSystem, setClientSystem] = useState('');

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
      setClientSystem('Android');
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    ) {
      setClientSystem('iOS');
    } else {
      setClientSystem('Other');
    }
  }, []);

  return clientSystem;
}
