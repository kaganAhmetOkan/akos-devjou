import style from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const title = `Ako's Developer Journal`
  
  return (
    <header className={style.main}>
      <Link href={"/"}>
        <h1>{title}</h1>
      </Link>
    </header>
  );
};