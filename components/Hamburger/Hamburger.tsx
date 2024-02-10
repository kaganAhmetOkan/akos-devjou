"use client";
import style from "./Hamburger.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useColorScheme } from "@/hooks/useMediaQuery";

export default function Hamburger() {
  const [isVisible, setIsVisible] = useState(false);
  const { isLight } = useColorScheme();
  const iconTheme = isLight ? "light" : "dark";
  const iconName = isVisible ? "close" : "menu";
  const iconSrc = `/icons/${iconName}_${iconTheme}.png`;
  const iconSize = 24;

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  };

  return (
    <button className={style.main} data-type="icon" onClick={toggleIsVisible}>
      <Image
        src={iconSrc}
        alt="Hamburger Menu"
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};