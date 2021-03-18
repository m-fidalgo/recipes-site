import FooterStyled from "./Footer.styled";

export default function Footer() {
  return (
    <footer className="footer">
      <style jsx>{FooterStyled}</style>
      <a className="footerLink" href="https://github.com/m-fidalgo">
        &copy; m-fidalgo
      </a>
    </footer>
  );
}
