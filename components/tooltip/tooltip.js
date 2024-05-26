import React, { useRef, useEffect, useState } from "react";
import styles from "./tooltip.module.css"; // Import as a module

/**
 * ToolTip component.
 */
const ToolTip = ({ component, children, style, interactive, ...rest }) => {
    // when the tooltip is hovered, it will be visible
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // reference to the tooltip element
    const tooltipRef = useRef(null);
    if (!component) {
        component = <p>Tooltip</p>;
    }
    // if a style is passed in, add { top: position.y, left: position.x } to it
    let newStyle;
    if (style) {
        newStyle = { ...style, top: position.y, left: position.x };
    } else {
        newStyle = { top: position.y, left: position.x };
    }

    useEffect(() => {
        let timeoutId = null;

        const handleMouseEnter = () => {
            // If a timeout has been set, clear it
            if (timeoutId) clearTimeout(timeoutId);

            // move the tooltip to the current mouse position
            const tooltipElement = tooltipRef.current;
            let { top, left, width } = tooltipElement.getBoundingClientRect();
            left += width / 2;
            // move the tooltip up the height of the tooltip
            console.log(tooltipElement.clientHeight);
            top -= 15;

            setPosition({ x: left, y: top });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            if (interactive) {
                // Set a timeout to hide the tooltip
                timeoutId = setTimeout(() => {
                    setIsVisible(false);
                }, 200);
            } else {
                setIsVisible(false);
            }
        };

        const tooltipElement = tooltipRef.current;
        tooltipElement.addEventListener("mouseenter", handleMouseEnter);
        tooltipElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            tooltipElement.removeEventListener("mouseenter", handleMouseEnter);
            tooltipElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={interactive ? tooltipRef : null}
            style={interactive ? { width: "fit-content", display: "inline-block" } : null}
        >
            <div
                className={`${styles.tooltip} ${!isVisible && styles.hidden}`}
                {...rest}
                style={newStyle}
            >
                <div className={styles.tooltipArrow} style={style} />
                <div className={styles.tooltipContent}>{component}</div>
            </div>
            {!interactive ? (
                <div
                    ref={tooltipRef}
                    style={{ width: "fit-content", display: "inline-block" }}
                >
                    {children}
                </div>
            ) : (
                <div>{children}</div>
            )}
        </div>
    );
};

export default ToolTip;
