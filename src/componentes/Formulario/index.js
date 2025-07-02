import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("Maria Eduarda");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

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
        <h2>Preencha os dado para criar o card do colaborador.</h2>
        <Campo
          valor={nome}
          obrigatorio
          label="Nome"
          placeholder="Digite seu Nome"
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio
          valor={cargo}
          label="Cargo"
          placeholder="Digite seu Cargo"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          obrigatorio
          valor={imagem}
          label="Imagem"
          placeholder="Digite o Endereço da Imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          itens={props.times}
          label="Time"
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dado para criar um novo time.</h2>
        <Campo
          valor={nomeTime}
          obrigatorio
          label="Nome do Time"
          placeholder="Digite o nome do time"
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          valor={corTime}
          label="Cor do Time"
          placeholder="Cor do time"
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar novo Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
