import { useEffect, useState } from 'react';

export default function useOperationSystem() {
  const [operationSystem, setOperationSystem] = useState('');

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
      setOperationSystem('Android');
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    ) {
      setOperationSystem('iOS');
    } else {
      setOperationSystem('Other');
    }
  }, []);

  return operationSystem;
}
