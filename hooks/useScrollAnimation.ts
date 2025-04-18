"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  /**
   * Number between 0 and 1 indicating the percentage of the element that needs to be visible
   * before triggering the animation (default: 0.05 or 5%)
   */
  threshold?: number;
  
  /**
   * Whether the animation should only trigger once when the element enters the viewport
   * and not again if it leaves and re-enters (default: true)
   */
  triggerOnce?: boolean;
  
  /**
   * Optional margin around the root element when calculating intersections
   * Format similar to CSS margin: "10px 20px 30px 40px" (top, right, bottom, left)
   */
  rootMargin?: string;
  
  /**
   * Disable the hook completely for SSR or when animations should be conditionally disabled
   */
  disabled?: boolean;
  
  /**
   * Animation duration in milliseconds
   */
  duration?: number;
}

/**
 * Custom hook that detects when an element enters the viewport to trigger animations
 * Uses the Intersection Observer API for performance
 * 
 * @param options - Configuration options for the scroll animation
 * @returns Object containing ref to attach to the element and whether it's visible
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.05,
  triggerOnce = true,
  rootMargin = '0px 0px -100px 0px',
  disabled = false,
  duration = 500,
}: ScrollAnimationOptions = {}): {
  ref: RefObject<T>;
  isVisible: boolean;
  hasBeenVisible: boolean;
  duration: number;
} {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<T>(null);
  
  useEffect(() => {
    // Skip setup if disabled or during SSR
    if (disabled || typeof window === 'undefined') return;
    
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // Update visibility state based on intersection
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          
          // Unobserve if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold,
      }
    );
    
    // Start observing the element
    observer.observe(currentRef);
    
    // Cleanup observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin, disabled]);
  
  // Since TypeScript complains about type incompatibility, we need to explicitly cast
  // the ref as RefObject<T> to match the return type
  return { 
    ref: ref as RefObject<T>, 
    isVisible, 
    hasBeenVisible,
    duration
  };
}

// Helper hook specifically for sections
export function useSectionAnimation(options?: Omit<ScrollAnimationOptions, 'rootMargin'>) {
  return useScrollAnimation({
    rootMargin: '0px 0px -150px 0px',
    threshold: 0.01,
    ...options,
  });
} 