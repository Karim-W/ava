import React from "react";

export interface AvaProps {
  initials: string;
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  textSize?: React.CSSProperties["fontSize"];
}

const bg = (initials: string): string => {
  let firstLetter: number = initials.charCodeAt(0) ?? 65;
  let secondLetter: number = initials.charCodeAt(1) ?? 65;
  firstLetter = ((firstLetter - 65) / 26) * 360;
  secondLetter = ((secondLetter - 65) / 26) * 180;
  return `linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3))
    ,linear-gradient(135deg,
    hsl(${firstLetter}, ${secondLetter}%,60%),
     hsl(${secondLetter}, ${firstLetter}%,80%))`;
};

export const Ava = ({
  initials,
  width,
  height,
  textSize,
}: AvaProps): JSX.Element => {
  return (
    <div
      style={{
        width,
        height,
        background: bg(initials.toUpperCase()),
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        fontWeight: "600",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
        filter:
          "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));",
        backdropFilter: "blur(10px)",
        fontSize: textSize ?? "1.5rem",
      }}
    >
      {initials.toUpperCase()}
    </div>
  );
};
export default Ava;
