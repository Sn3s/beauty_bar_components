import React from "react";

type TextInputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  value?: string;
};

export default function TextInputBox({
  label = "Email Address/Phone Number",
  value = "",
  ...props
}: TextInputBoxProps) {
  return (
    <div style={{ width: "384px" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "4px",
            fontFamily: "Owners XWide, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "1.25rem", // leading-5 = 20px
            letterSpacing: "0",
            color: "rgba(2, 6, 23, 1)",
          }}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        readOnly
        style={{
          width: "384px",
          height: "40px",
          paddingTop: "0.625rem",    // p-2.5 = 10px = 0.625rem
          paddingRight: "12px",      // gap-3 = 12px
          paddingBottom: "0.625rem",
          paddingLeft: "12px",       // p-3 = 12px
          borderRadius: "0.375rem",  // radius-md = 6px = 0.375rem
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(226, 232, 240, 1)",
          background: "rgba(255, 255, 255, 1)",
          fontFamily: "Geist",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "0.875rem",      // text-sm = 14px = 0.875rem
          lineHeight: "1.25rem",     // leading-5 = 20px = 1.25rem
          letterSpacing: "0",
          color: "rgba(2, 6, 23, 1)",
          opacity: 1,
        }}
        {...props}
      />
    </div>
  );
}