'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type CursorVariant =
  | 'default'
  | 'pointer'
  | 'text'
  | 'badge'
  | 'hidden'
  | 'input';

interface CursorContextType {
  setCursorVariant: (variant: CursorVariant) => void;
  setCursorText: (text: string | null) => void;
  setCursorIcon: (icon: 'arrow' | 'none') => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorVariant: () => {},
  setCursorText: () => {},
  setCursorIcon: () => {},
});

export const useCursor = () => useContext(CursorContext);

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorIcon, setCursorIcon] = useState<'arrow' | 'none'>('none');
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleCount = useRef(0);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast spring for inner precision dot (instant feedback)
  const dotSpringConfig = { stiffness: 1200, damping: 50, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Smooth liquid spring for outer follower ring (luxury organic feel)
  const ringSpringConfig = { stiffness: 240, damping: 24, mass: 0.45 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Velocity-based dynamic stretch
  const ringVelocityX = useVelocity(ringX);
  const ringVelocityY = useVelocity(ringY);
  
  // Transform speed into slight dynamic scale / tilt for fluid motion
  const speed = useTransform(
    [ringVelocityX, ringVelocityY],
    ([vx, vy]: number[]) => {
      const v = Math.sqrt(vx * vx + vy * vy);
      return Math.min(v / 1800, 0.25); // cap deformation at 25%
    }
  );

  const scaleX = useTransform(speed, (s) => 1 + s * 0.4);
  const scaleY = useTransform(speed, (s) => 1 - s * 0.2);

  // Determine if device supports hover/fine pointer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only enable on desktop devices with fine pointer (mouse / trackpad)
    const mediaFine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaFine.matches && !mediaReduced.matches) {
      setMounted(true);
      document.documentElement.classList.add('custom-cursor-enabled');
    }

    const handleChange = () => {
      if (mediaFine.matches && !mediaReduced.matches) {
        setMounted(true);
        document.documentElement.classList.add('custom-cursor-enabled');
      } else {
        setMounted(false);
        document.documentElement.classList.remove('custom-cursor-enabled');
      }
    };

    mediaFine.addEventListener('change', handleChange);
    mediaReduced.addEventListener('change', handleChange);

    return () => {
      mediaFine.removeEventListener('change', handleChange);
      mediaReduced.removeEventListener('change', handleChange);
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  // Global mouse event listeners & automatic element detection
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Spawn subtle ripple pulse
      rippleCount.current += 1;
      const newRipple: Ripple = {
        id: rippleCount.current,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Auto-detect hovered element type via event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for custom badge attribute (e.g. data-cursor-text="VIEW" or data-cursor="explore")
      const customText = target.closest('[data-cursor-text]');
      const customAction = target.closest('[data-cursor]');
      const isHidden = target.closest('[data-cursor-hidden]');
      const isInput = target.closest('input, textarea, select, [contenteditable="true"]');
      const isInteractive = target.closest(
        'a, button, [role="button"], [data-cursor-pointer], input[type="submit"], input[type="button"], label, .cursor-pointer'
      );
      const isHeading = target.closest('h1, h2, h3, .font-heading');

      if (isHidden) {
        setCursorVariant('hidden');
        setCursorText(null);
        setCursorIcon('none');
      } else if (customText) {
        const text = customText.getAttribute('data-cursor-text');
        setCursorVariant('badge');
        setCursorText(text || 'EXPLORE');
        setCursorIcon(customText.getAttribute('data-cursor-icon') === 'none' ? 'none' : 'arrow');
      } else if (customAction) {
        const actionType = customAction.getAttribute('data-cursor');
        if (actionType === 'pointer') {
          setCursorVariant('pointer');
          setCursorText(null);
          setCursorIcon('none');
        } else if (actionType === 'text') {
          setCursorVariant('text');
          setCursorText(null);
          setCursorIcon('none');
        } else if (actionType) {
          setCursorVariant('badge');
          setCursorText(actionType.toUpperCase());
          setCursorIcon('arrow');
        }
      } else if (isInput) {
        setCursorVariant('input');
        setCursorText(null);
        setCursorIcon('none');
      } else if (isInteractive) {
        setCursorVariant('pointer');
        setCursorText(null);
        setCursorIcon('none');
      } else if (isHeading) {
        setCursorVariant('text');
        setCursorText(null);
        setCursorIcon('none');
      } else {
        setCursorVariant('default');
        setCursorText(null);
        setCursorIcon('none');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mounted, mouseX, mouseY, isVisible]);

  // Clean up old ripples after animation duration
  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  if (!mounted) return null;

  // Ring variants configuration
  const getRingStyles = () => {
    if (cursorVariant === 'hidden') {
      return {
        width: 0,
        height: 0,
        opacity: 0,
        scale: 0,
      };
    }

    if (cursorVariant === 'input') {
      return {
        width: 24,
        height: 24,
        opacity: 0.15,
        scale: 0.8,
        backgroundColor: 'rgba(196, 163, 90, 0)',
        borderColor: 'rgba(196, 163, 90, 0.4)',
      };
    }

    if (cursorVariant === 'badge') {
      return {
        width: 86,
        height: 86,
        opacity: 1,
        scale: isClicking ? 0.92 : 1,
        backgroundColor: 'rgba(11, 27, 77, 0.94)',
        borderColor: 'rgba(196, 163, 90, 0.75)',
        boxShadow:
          '0 12px 36px -4px rgba(11, 27, 77, 0.35), 0 0 24px 0 rgba(196, 163, 90, 0.35)',
      };
    }

    if (cursorVariant === 'pointer') {
      return {
        width: 58,
        height: 58,
        opacity: 1,
        scale: isClicking ? 0.85 : 1,
        backgroundColor: 'rgba(196, 163, 90, 0.12)',
        borderColor: 'rgba(196, 163, 90, 0.85)',
        boxShadow:
          '0 0 20px 2px rgba(196, 163, 90, 0.25), inset 0 0 12px rgba(196, 163, 90, 0.1)',
      };
    }

    if (cursorVariant === 'text') {
      return {
        width: 4,
        height: 28,
        borderRadius: '4px',
        opacity: 0.9,
        scale: isClicking ? 0.85 : 1,
        backgroundColor: '#C4A35A',
        borderColor: '#C4A35A',
        boxShadow: '0 0 12px rgba(196, 163, 90, 0.5)',
      };
    }

    // Default state: matching the gold hairline ring and central dot
    return {
      width: 40,
      height: 40,
      opacity: 0.95,
      scale: isClicking ? 0.82 : 1,
      backgroundColor: 'rgba(196, 163, 90, 0.04)',
      borderColor: 'rgba(196, 163, 90, 0.75)',
      boxShadow: '0 0 18px 0 rgba(196, 163, 90, 0.25)',
    };
  };

  const getDotStyles = () => {
    if (cursorVariant === 'hidden' || cursorVariant === 'badge') {
      return { opacity: 0, scale: 0 };
    }
    if (cursorVariant === 'input') {
      return { opacity: 0, scale: 0 };
    }
    if (cursorVariant === 'text') {
      return { opacity: 0, scale: 0 };
    }
    if (cursorVariant === 'pointer') {
      return {
        opacity: 1,
        scale: isClicking ? 1.3 : 1.1,
        backgroundColor: '#C4A35A',
      };
    }
    return {
      opacity: 1,
      scale: isClicking ? 0.8 : 1,
      backgroundColor: '#C4A35A',
    };
  };

  const ringStyles = getRingStyles();
  const dotStyles = getDotStyles();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none"
    >
      {/* Click Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.6, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => removeRipple(ripple.id)}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              x: '-50%',
              y: '-50%',
              width: 50,
              height: 50,
              borderRadius: '50%',
              border: '1.5px solid rgba(196, 163, 90, 0.7)',
              boxShadow: '0 0 16px rgba(196, 163, 90, 0.4)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Fluid Outer Ring Follower */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center rounded-full pointer-events-none backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scaleX: cursorVariant === 'text' ? 1 : scaleX,
          scaleY: cursorVariant === 'text' ? 1 : scaleY,
          borderWidth: cursorVariant === 'text' ? '0px' : '1.25px',
          borderStyle: 'solid',
        }}
        animate={{
          ...ringStyles,
          opacity: isVisible ? ringStyles.opacity : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 28,
          mass: 0.3,
        }}
      >
        {/* Shimmer light sweep on badge / pointer */}
        {(cursorVariant === 'badge' || cursorVariant === 'pointer') && (
          <span
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
            }}
          />
        )}

        {/* Dynamic Badge Text (e.g. "VIEW", "EXPLORE", "READ") */}
        <AnimatePresence>
          {cursorVariant === 'badge' && cursorText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center gap-1 text-advisory-gold font-heading text-[10px] font-bold tracking-widest px-2 select-none"
            >
              <span>{cursorText}</span>
              {cursorIcon === 'arrow' && (
                <ArrowUpRight className="w-3 h-3 text-advisory-gold shrink-0 stroke-[2.5]" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Precision Center Dot */}
      <motion.div
        className="absolute top-0 left-0 w-[8px] h-[8px] rounded-full pointer-events-none shadow-glow-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          ...dotStyles,
          opacity: isVisible ? dotStyles.opacity : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 35,
        }}
      />
    </div>
  );
};
