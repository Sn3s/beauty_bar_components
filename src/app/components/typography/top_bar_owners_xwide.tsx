import React from "react";

type BeautyBarTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function BeautyBarText({ children, ...props }: BeautyBarTextProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "12px",
        lineHeight: "1",
        letterSpacing: "0",
        color: "rgba(0, 0, 0, 1)",
      }}
      {...props}
    >
      {children}
      </span>
  );
}