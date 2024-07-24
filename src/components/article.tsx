import Image from "next/image";
import styles from "./article.module.scss";
import { ReactNode } from "react";

interface ArticleProps {
  children?: ReactNode;
}

export default function Article({ children } : ArticleProps) {
  return ( 
  <article className={styles.article}>
    {children}
  </article>);
}