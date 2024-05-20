import React, { useRef, useEffect, useState } from "react";
import styles from "./tooltip.module.css";  // Import as a module

/**
 * ToolTip component.
 */
const ToolTip = ({ children }) => {
    // when the tooltip is hovered, it will be visible
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // reference to the tooltip element
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => { 
            // move the tooltip to the current mouse position
            const tooltipElement = tooltipRef.current;
            let { top, left, width } = tooltipElement.getBoundingClientRect();
            left += width / 2;
            // move the tooltip up the height of the tooltip
            console.log(tooltipElement.clientHeight)
            top -= 15;
            
            setPosition({ x: left, y: top });
            setIsVisible(true); 
        }

        const handleMouseLeave = () => setIsVisible(false);

        const tooltipElement = tooltipRef.current;
        tooltipElement.addEventListener("mouseenter", handleMouseEnter);
        tooltipElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            tooltipElement.removeEventListener("mouseenter", handleMouseEnter);
            tooltipElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={tooltipRef} style={{ width: "fit-content", display: "inline-block" }}>
            <div 
                className={`${styles.tooltip} ${!isVisible && styles.hidden}`} 
                style={{ top: position.y, left: position.x }}
            >
                <div className={styles.tooltipArrow} />
                <div className={styles.tooltipContent}>
                    <p>Tooltip content here</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default ToolTip;
