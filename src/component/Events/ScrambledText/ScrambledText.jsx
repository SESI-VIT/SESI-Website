
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import './ScrambledText.css';


gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 50,
  duration = 2.0,
  speed = 0.1,
  scrambleChars = '.:',
  className = '',
  style = {},
  as: Wrapper = 'p',
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;


    const splitElement = rootRef.current;


    const split = new SplitText(splitElement, {
      type: 'chars',
      charsClass: 'char'
    });
    charsRef.current = split.chars;


    charsRef.current.forEach(c => {
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });


    const handleMove = e => {
      charsRef.current.forEach(c => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed: speed
            },
            ease: 'none'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);


    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };

  }, [radius, duration, speed, scrambleChars]);


  return (
    <Wrapper ref={rootRef} className={`text-block ${className}`} style={style}>
      {children}
    </Wrapper>
  );
};

export default ScrambledText;