"use client";
import style from "./Header.module.scss";
import Link from "next/link";
import ToggleHeader from "../ToggleHeader/ToggleHeader";
import SearchBar from "../SearchBar/SearchBar";
import { usePersistingState } from "@/hooks/usePersistingState";

export default function Header() {
  const title = `Ako's Developer Journal`
  const [headerVisible, setHeaderVisible] = usePersistingState("headerVisible", true);

  return (
    <header className={style.main} data-visible={headerVisible}>
      <Link href={"/"}>
        <h1>{title}</h1>
      </Link>
      <div className={style.buttons}>
        <ToggleHeader visible={headerVisible} setVisible={setHeaderVisible} />
        <SearchBar />
      </div>
    </header>
  );
};