"use client";
import style from "./SearchBar.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useColorScheme } from "@/hooks/useMediaQuery";

export default function SearchBar() {
  const [visible, setVisible] = useState(false);
  const { isLight } = useColorScheme();
  const iconSrc = isLight ? "/icons/search_light.png" : "/icons/search_dark.png";
  const iconSize = 24;

  function toggleVisible() {
    setVisible(!visible);
  };

  // TODO: Add search functionality
  // TODO: Search after user stops typing

  return (
    <search className={style.main} data-visible={visible}>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        disabled={!visible}
      />
      <button className={style.button} data-type="icon" onClick={toggleVisible}>
        <Image
          src={iconSrc}
          alt="search"
          width={iconSize}
          height={iconSize}
        />
      </button>
    </search>
  );
};