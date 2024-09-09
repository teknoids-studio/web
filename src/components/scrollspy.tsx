// components/ScrollSpy.tsx
import React, { useEffect, useState } from 'react';
import styles from './ScrollSpy.module.css';

interface ScrollSpyProps {
  items: string[];  // Array of section IDs to monitor
  offset?: number;  // Optional offset to adjust when sections are considered in view
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ items, offset = 0 }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentId = '';
      items.forEach((item) => {
        const section = document.getElementById(item);
        if (section && section.offsetTop <= scrollPosition) {
          currentId = item;
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, offset]);

  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={activeId === item ? styles.active : ''}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollSpy;
