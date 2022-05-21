import React from 'react';

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export default function useIntersectionObserver({
  root,
  rootMargin = '0px',
  threshold = 1.0,
  onIntersect,
}: useIntersectionObserverProps) {
  const [target, setTarget] = React.useState<HTMLElement | null | undefined>(null);

  React.useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [onIntersect, root, rootMargin, target, threshold]);
  return { setTarget };
}
