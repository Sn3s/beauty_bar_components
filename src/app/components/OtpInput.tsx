import React, { useRef } from "react";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const OTP_LENGTH = 4;

export default function OtpInput({ value, onChange }: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    let newValueArr = value.split("");
    if (val) {
      newValueArr[idx] = val[0];
      const newValueStr = newValueArr.join("").padEnd(OTP_LENGTH, "");
      onChange(newValueStr.slice(0, OTP_LENGTH));
      // Move to next input
      if (idx < OTP_LENGTH - 1) {
        inputsRef.current[idx + 1]?.focus();
      }
    } else {
      // If input is cleared, remove the digit and move focus back
      newValueArr[idx] = "";
      const newValueStr = newValueArr.join("").padEnd(OTP_LENGTH, "");
      onChange(newValueStr.slice(0, OTP_LENGTH));
      if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (value[idx]) {
        // Clear current digit
        let newValueArr = value.split("");
        newValueArr[idx] = "";
        const newValueStr = newValueArr.join("").padEnd(OTP_LENGTH, "");
        onChange(newValueStr.slice(0, OTP_LENGTH));
      } else if (idx > 0) {
        // Move focus to previous input
        inputsRef.current[idx - 1]?.focus();
      }
    }
    if (e.key === "Delete") {
      // Clear current digit
      let newValueArr = value.split("");
      newValueArr[idx] = "";
      const newValueStr = newValueArr.join("").padEnd(OTP_LENGTH, "");
      onChange(newValueStr.slice(0, OTP_LENGTH));
    }
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {Array.from({ length: OTP_LENGTH }).map((_, idx) => {
        const filled = !!value[idx];
        return (
          <input
            key={idx}
            ref={el => { inputsRef.current[idx] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[idx] || ""}
            onChange={e => handleChange(idx, e)}
            onKeyDown={e => handleKeyDown(idx, e)}
            style={{
              width: 80,
              height: 80,
              borderRadius: 99,
              padding: 8,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: filled ? "rgba(255, 147, 151, 1)" : "rgba(208, 213, 221, 1)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "60px",
              letterSpacing: "-2%",
              textAlign: "center",
              color: filled ? "rgba(254, 52, 59, 1)" : "rgba(208, 213, 221, 1)",
              outline: "none",
              transition: "border-color 0.2s, color 0.2s"
            }}
            autoFocus={idx === 0}
          />
        );
      })}
    </div>
  );
}