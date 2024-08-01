import Image from "next/image";
import styles from "./article.module.scss";
import { ReactNode } from "react";

interface ArticleProps {
  children?: ReactNode;
  useBorder?: boolean;
  borderColor?: string;
}


export default function Article({ useBorder, borderColor, children } : ArticleProps) {
  return ( 
  <article className={`${styles.article } ${useBorder ? styles.border : ''}`}
    style={{ borderColor: useBorder ? borderColor : 'transparent' }}
  >
    {children}
  </article>);
}