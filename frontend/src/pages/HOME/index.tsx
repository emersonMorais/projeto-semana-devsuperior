import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="container-md">
        <div className="jumbotron">
          <h1 className="display-4">DS Vendas</h1>
          <hr />
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p className="home-text-description">
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um backend construído em Spring Boot.
          </p>
          <Link className="btn btn-primary btn-lg " to="/dashboard">
            Acessar Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
