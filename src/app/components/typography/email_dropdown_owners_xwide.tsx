import React from "react";

type EmailDropdownOwnersXWideProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function EmailDropdownOwnersXWide({ children, ...props }: EmailDropdownOwnersXWideProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "12px",
        lineHeight: "1.25rem", // leading-5 = 20px = 1.25rem
        letterSpacing: "0",
        color: "rgba(117, 117, 117, 1)",
      }}
      {...props}
    >
      {children}
    </span>
  );
}