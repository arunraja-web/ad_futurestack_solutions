import React, { useState, useEffect, useRef } from 'react';

export default function CountUp({ target, duration = 1200 }) {
  const [currentValue, setCurrentValue] = useState(null);
  const elementRef = useRef(null);
  const targetString = String(target);
  
  // Parse the target string into prefix, number, and suffix
  const match = targetString.match(/^([^0-9\.]*)([0-9\.]+)(.*)$/);
  
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : targetString;
  const suffix = match ? match[3] : '';
  
  const targetNumber = parseFloat(numStr) || 0;
  const isFloat = numStr.includes('.');
  const decimals = isFloat ? numStr.split('.')[1].length : 0;

  useEffect(() => {
    // Initial render without intersection observer triggered yet
    if (currentValue === null) {
      setCurrentValue(0);
    }

    let startTime = null;
    let animationFrameId = null;
    let observer = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      // Ease-out cubic formula
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      
      const percentage = Math.min(progress / duration, 1);
      const easedProgress = easeOut(percentage);
      
      let currentCount = easedProgress * targetNumber;
      if (!isFloat) {
        currentCount = Math.floor(currentCount);
      }
      
      setCurrentValue(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetNumber);
      }
    };

    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animationFrameId = requestAnimationFrame(animate);
        if (observer) {
          observer.disconnect();
        }
      }
    };

    observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
    };
  }, [target, duration, targetNumber, isFloat]);

  // Handle formatting the number
  const formattedNumber = currentValue !== null 
    ? (isFloat ? currentValue.toFixed(decimals) : currentValue.toString())
    : "0";

  return <span ref={elementRef}>{prefix}{formattedNumber}{suffix}</span>;
}
