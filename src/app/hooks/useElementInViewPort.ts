import { useState, useEffect, useRef  } from "react";

const useElementInViewPort = ({options}: { options: any }) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = ({entries} : {entries : any}) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect( () => {
        const observer = new IntersectionObserver(callbackFunction, options)
        const currentContainerRef = containerRef.current; // Copy the ref value to a variable inside the effect
        if(currentContainerRef)
            observer.observe(currentContainerRef)

        return () => {
            if(currentContainerRef)
                observer.unobserve(currentContainerRef)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useElementInViewPort;