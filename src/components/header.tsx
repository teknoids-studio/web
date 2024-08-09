import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "./logo";
import Article from "./article";
import { Typewriter } from "./typewriter";

export default function Header() {
  return ( 
  <header className={styles.header}>
    <Logo />
    <Article >
      <h1>Next.js</h1>
      <h2><Typewriter showCursor={true}><span> with TypeScript, ESLint, Prettier, and SCSS</span></Typewriter></h2>
    </Article>
  </header>);
}