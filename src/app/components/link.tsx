import React, { useState } from "react";

type NavHoverTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function NavHoverText({ children, ...props }: NavHoverTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      style={{
        fontFamily: "Owners XWide",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "1",
        letterSpacing: "0",
        textAlign: "center",
        textTransform: "uppercase",
        color: isHovered ? "rgba(117, 117, 117, 1)" : "rgba(199, 46, 75, 1)",
        cursor: "pointer",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </span>
  );
}