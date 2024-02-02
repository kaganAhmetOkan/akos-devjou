"use client";
import style from "./Button.module.scss";

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme?: "none" | "primary";
  enabled?: boolean;
};

export default function Button(
  { children, theme="none", enabled=false, ...props }: CustomProps
) {
  return (
    <button
      className={style.main}
      data-theme={theme}
      data-enabled={enabled}
      {...props}
    >
      {children}
    </button>
  );
};