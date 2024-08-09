import { useEffect, useRef, useState } from "react";
interface TypewriterWithEraseProps {
    text: string[];
    typingDelay?: number;
    eraserDelay?: number;
    newTextDelay?: number;
    showCursor?: boolean;
}
const TypewriterWithErase = ({ text, showCursor = true, typingDelay = 250, eraserDelay = 100, newTextDelay = 1000, ...other }: TypewriterWithEraseProps) => {
    const textSpan = useRef<HTMLSpanElement | null>(null);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
    const [speed, setSpeed] = useState(typingDelay);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const renderCursor = () => {
        if (showCursor)
            return (
                <span className="blinking-cursor">|</span>
            );
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isErasing) {
                setCurrentLetterIndex((prevIndex) => prevIndex + 1);
            }
            else {
                setCurrentLetterIndex((prevIndex) => prevIndex + -1);
            }
            if (!isErasing && text[currentWordIndex].length === currentLetterIndex) {
                // Make pause at end
                setSpeed(newTextDelay);
                // Set delete to true
                setIsErasing(true);
                setSpeed(eraserDelay);
            } else if (isErasing && currentLetterIndex === 0) {
                setIsErasing(false);
                setSpeed(typingDelay);
                // Move to next word
                if (currentWordIndex === text.length - 1) {
                    setCurrentWordIndex(0);
                } else {
                    setCurrentWordIndex((prevIndex) => prevIndex + 1);
                }
            }
        }, speed);
        return () => clearInterval(interval);
    }, [currentLetterIndex]);
    return (
        <span>{text[currentWordIndex].substring(0, currentLetterIndex)}{renderCursor()}</span>
    )
}
export { TypewriterWithErase };