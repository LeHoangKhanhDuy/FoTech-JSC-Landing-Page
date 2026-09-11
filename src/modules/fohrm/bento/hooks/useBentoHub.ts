import { useState, useEffect, useCallback } from 'react';
import { BENTO_INTEGRATION_NODES } from '../data/bentoData';

export function useBentoHub(isInView: boolean = true) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [syncCount, setSyncCount] = useState(1250);

  useEffect(() => {
    if (!isInView || isUserInteracting) return;

    const nodeIds = BENTO_INTEGRATION_NODES.map((n) => n.id);
    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveNodeId(nodeIds[currentIndex]);
      currentIndex = (currentIndex + 1) % nodeIds.length;
    }, 3200);

    return () => clearInterval(interval);
  }, [isInView, isUserInteracting]);

  useEffect(() => {
    if (!isInView) return;

    const syncInterval = setInterval(() => {
      setSyncCount((prev) => (prev >= 1265 ? 1250 : prev + 1));
    }, 5000);

    return () => clearInterval(syncInterval);
  }, [isInView]);

  const handleNodeMouseEnter = useCallback((nodeId: string) => {
    setIsUserInteracting(true);
    setActiveNodeId(nodeId);
  }, []);

  const handleNodeMouseLeave = useCallback(() => {
    setIsUserInteracting(false);
    setActiveNodeId(null);
  }, []);

  const handleNodeClick = useCallback((nodeId: string) => {
    setIsUserInteracting(true);
    setActiveNodeId((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  return {
    activeNodeId,
    syncCount,
    handleNodeMouseEnter,
    handleNodeMouseLeave,
    handleNodeClick,
  };
}
