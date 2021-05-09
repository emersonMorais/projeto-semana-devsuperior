import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="footer mt-auto py-1">
      <div className="container">
        <p className="text-light">
          App desenvolvido por Emerson Chaves
          <a
            className="footer-icon"
            href="https://github.com/emersonMorais"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/emersoncmorais/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="footer-icon" />
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}
