import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("Maria Eduarda");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const [time, setTime] = useState(props.times[0]);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dado para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu Nome"
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          valor={cargo}
          label="Cargo"
          placeholder="Digite seu Cargo"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          valor={imagem}
          label="Imagem"
          placeholder="Digite o Endereço da Imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorios={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          itens={props.times}
          label="Time"
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
