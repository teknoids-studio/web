import Image from "next/image";
import styles from "./hero.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  useBorder?: boolean;
  color?: string;
}

export default function Hero({ useBorder, color, children }: HeroProps) {
  const colorMapper = (color?: string): string => {
    switch (color) {
      case "commodore1":
        return styles.commodore1;
      case "commodore2":
        return styles.commodore2;
      case "commodore3":
        return styles.commodore3;
      case "commodore4":
        return styles.commodore4;
      case "commodore5":
        return styles.commodore5;
      default:
        return styles.commodore1;
    }
  };

  return (
    <section
      className={`${styles.hero} ${colorMapper(color)} ${useBorder ? styles.border : ""}`}
    >
      {children}
    </section>
  );
}
