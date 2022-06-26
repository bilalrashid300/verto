import { useRef, useState, useEffect } from 'react';

const FadeInSection = ({
  children,
}) => {
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef?.current);
      }
    });
    observer.observe(domRef?.current);
    // return () => observer.unobserve(domRef?.current);
  }, [domRef]);

  return (<div ref={ domRef } className={`visible ${isVisible ? 'active' : ''}`}>{ children }</div>);
};

export default FadeInSection;
