
import { ReactNode } from "react";
import styles from "./typewriter.module.scss";

interface TypewriterProps {
   // text: string[];
    showCursor?: boolean;
    children: ReactNode;
}
const Typewriter = ({ showCursor = true, children, ...other }: TypewriterProps) => {
    return (
        <section className={styles.typewriterRoot}>
        <div className={`${styles.typewriter } ${!showCursor ? styles.no_caret : ''}`}>
            {children}

        </div>
        </section>
    )
}
export { Typewriter };