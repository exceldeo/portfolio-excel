import { useEffect, useRef, useState } from 'react';

function useHover(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }
  function handleMouseOut() {
    setIsHovered(false);
  }

  useEffect(() => {
    if (window !== undefined) {
      const node = ref.current;
      if (document.readyState === 'complete') {
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      }
    }
  }, []);

  return [ref, isHovered];
}

export default useHover;
