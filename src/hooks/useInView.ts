import { useInView as useInViewLib } from 'react-intersection-observer';

export const useInView = (options?: { threshold?: number; triggerOnce?: boolean }) => {
  return useInViewLib({
    threshold: options?.threshold ?? 0.1,
    triggerOnce: options?.triggerOnce ?? true,
  });
};
