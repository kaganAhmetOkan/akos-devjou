import style from "./Header.module.scss";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  const title = `Ako's Developer Journal`
  
  return (
    <header className={style.main}>
      <Link href={"/"}>
        <h1>{title}</h1>
      </Link>
      <div className={style.buttons}>
        <SearchBar />
      </div>
    </header>
  );
};