import React from "react";

type BentonModDispCompTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function BentonModDispCompText({ children, ...props }: BentonModDispCompTextProps) {
  return (
    <span
      style={{
        fontFamily: "BentonModDispComp",
        fontWeight: 600,
        fontStyle: "Italic",
        fontSize: "128px",
        lineHeight: "1",
        letterSpacing: "0",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 1)",
      }}
      {...props}
    >
      {children}
    </span>
  );
}