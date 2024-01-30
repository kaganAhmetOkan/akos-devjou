"use client";
import style from "./ToggleHeader.module.scss";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useColorScheme } from "@/hooks/useMediaQuery";

export default function ToggleHeader(
  { visible, setVisible }: Readonly<{ visible: boolean; setVisible: Dispatch<SetStateAction<boolean>> }>
) {
  const { isLight } = useColorScheme();
  const iconTheme = isLight ? "light" : "dark";
  const iconName = visible ? "up" : "down";
  const iconSrc = `/icons/${iconName}_${iconTheme}.png`;
  const iconSize = 24;

  function toggleVisible() {
    setVisible(!visible);
  };

  return (
    <button className={style.main} data-type="icon" onClick={toggleVisible}>
      <Image
        src={iconSrc}
        alt="header toggle"
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};