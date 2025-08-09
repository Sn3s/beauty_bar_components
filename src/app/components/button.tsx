"use client";
import React, { useState } from "react";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AnimatedButton({ ...props }: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        width: "213px",
        height: "58px",
        minWidth: "80px",
        position: "absolute",
        top: "20px",
        left: "20px", // Fixed position, no animation
        paddingTop: "0.5rem",    // p-2 = 8px = 0.5rem
        paddingRight: "0.75rem", // p-3 = 12px = 0.75rem
        paddingBottom: "0.5rem",
        paddingLeft: "0.75rem",
        gap: "4px",
        borderRadius: "0.375rem", // rounded-md = 6px = 0.375rem
        background: hovered ? "rgba(249, 242, 235, 1)" : "rgba(199, 46, 75, 1)",
        opacity: 1,
        border: "none",
        transition: "background 300ms ease-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span
        style={{
          width: "92px",
          height: "24px",
          paddingTop: "0px",
          paddingRight: "4px",
          paddingBottom: "0px",
          paddingLeft: "4px",
          gap: "0px",
          fontFamily: "Owners XWide, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "1.5",
          letterSpacing: "0",
          textTransform: "uppercase",
          // Default text color (when not hovered)
          color: hovered ? "rgba(150, 150, 150, 1)" : "rgba(2, 6, 23, 1)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </span>
    </button>
  );
}
