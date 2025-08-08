import React from "react";

type ProfileDropdownOwnersXWideProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function ProfileDropdownOwnersXWide({ children, ...props }: ProfileDropdownOwnersXWideProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide, sans-serif",
        fontWeight: 400, // font-normal
        fontStyle: "normal",
        fontSize: "10px",
        lineHeight: "1.25rem", // leading-5 = 20px = 1.25rem
        letterSpacing: "0",
        color: "rgba(2, 6, 23, 1))"
      }}
      {...props}
    >
      {children}
    </span>
  );
}