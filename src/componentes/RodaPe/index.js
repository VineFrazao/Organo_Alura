import "./Rodape.css";

const RodaPe = () => {
  return (
    <footer className="rodape">
      <section className="redes">
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>

      <div className="logo">
        <img src="/imagens/logo.png" alt="Logo Organo" />
      </div>
      <div className="creditos">
        <h5>Desenvolvido por Alura.</h5>
      </div>
    </footer>
  );
};

export default RodaPe;
