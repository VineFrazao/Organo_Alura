import { useState } from "react";
import Banner from "./componentes/Banner";
import Colaborador from "./componentes/Colaborador";
import Formulario from "./componentes/Formulario";
import RodaPe from "./componentes/RodaPe";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const inicial = [
    {
      id: uuidv4(),
      nome: "Guilherme",
      cargo: "Tech Lead",
      imagem: "https://github.com/guilhermeonrails.png",
      time: "Inovação e Gestão",
      favorito: true,
    },
    {
      id: uuidv4(),
      nome: "Vinicios",
      cargo: "Instrutor REACT na Alura",
      imagem: "https://github.com/viniciosneves.png",
      time: "Front-End",
      favorito: false,
    },
  ];
  const [colaboradores, setColaboradores] = useState(inicial);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Deveops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D87EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  function deletarColaborador(nome, id) {
    console.log("Deletando colaborador", nome);
    const filtrarColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(filtrarColaboradores);
    console.log(id);
    console.log(colaboradores);
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.id}
          time={time}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time == time.nome
          )}
        />
      ))}
      <RodaPe />
    </div>
  );
}

export default App;
