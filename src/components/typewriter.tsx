import { ReactNode } from "react";
import styles from "./typewriter.module.scss";

interface TypewriterProps {
    showCursor?: boolean;
    children?: ReactNode;
}
const Typewriter = ({ showCursor = true, children }: TypewriterProps) => {
   
    
    return (
        <div className={`${styles.typewriter } ${showCursor ? 'showCursor' : ''}`}>
            {children}
        </div>        
    )
}
export { Typewriter };