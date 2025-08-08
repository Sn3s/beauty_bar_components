import React from "react";

type MainNavOwnersXWideProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function MainNavOwnersXWide({ children, ...props }: MainNavOwnersXWideProps) {
  return (
    <span
      style={{
        fontFamily: "Owners XWide, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "1.1",
        letterSpacing: "0.25em",
        textAlign: "center",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 1)",
      }}
      {...props}
    >
      {children}
    </span>
  );
}