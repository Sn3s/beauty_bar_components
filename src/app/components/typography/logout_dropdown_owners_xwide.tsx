import React from "react";

type LogoutDropdownOwnersXWideProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function LogoutDropdownOwnersXWide({ children, ...props }: LogoutDropdownOwnersXWideProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "10px",
        lineHeight: "1.25rem", // leading-5 = 20px = 1.25rem
        letterSpacing: "0",
        color: "rgba(199, 46, 75, 1)", // Example: logout action in red
      }}
      {...props}
    >
      {children}
    </span>
  );
}