import { useState, useEffect } from 'react';
import '../ScrollComponent.scss';
import Landing from '../components/Landing';
import LandingVenom from '../components/LandingVenom';

const ScrollComponent = () => {
  const [showVenom, setShowVenom] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newShowVenom = window.scrollY > 20;

      if (newShowVenom !== showVenom && !isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setShowVenom(newShowVenom);
          setIsTransitioning(false);
        }, 300); // Correspond à la durée de la transition
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVenom, isTransitioning]);

  return (
    <div className={`fade ${isTransitioning ? 'fade-active' : ''}`}>
      {showVenom ? <LandingVenom /> : <Landing />}
    </div>
  );
};

export default ScrollComponent;
