import React from "react";

type BookingsDropdownOwnersXWideProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function BookingsDropdownOwnersXWide({ children, ...props }: BookingsDropdownOwnersXWideProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide, sans-serif",
        fontWeight: 400, // font-normal
        fontStyle: "normal",
        fontSize: "0.875rem", // text-sm = 14px = 0.875rem
        lineHeight: "1.25rem", // leading-5 = 20px = 1.25rem
        letterSpacing: "0",
        color: "rgba(2, 6, 23, 1)",
      }}
      {...props}
    >
      {children}
    </span>
  );
}