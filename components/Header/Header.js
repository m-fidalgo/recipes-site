import Head from "next/head";
import Link from "next/link";
import HeaderStyled from "./Header.styled";

export default function Header(props) {
  return (
    <header className="header">
      <style jsx>{HeaderStyled}</style>
      <Head>
        <title>{props.title}</title>
      </Head>

      <Link href="/">
        <a>
          <img alt="Receitas" src="/img/logo.svg" />
        </a>
      </Link>
    </header>
  );
}
