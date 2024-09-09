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
      <h2>
        <Typewriter  showCursor={true}>
          <span> Freelance developer, technical leader and product manager</span>
        </Typewriter>
      </h2>
      </Article>
  </header>);
}