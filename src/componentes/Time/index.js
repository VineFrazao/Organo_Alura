import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./Time.css";

const Time = ({time, colaboradores, mudarCor, aoDeletar, aoFavoritar}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, '0.5'), backgroundImage: 'url(/imagens/fundo.png)' }}
      >
        <input type="color" className="input-cor" onChange={(evento) => mudarCor(evento.target.value, time.id)} value={time.cor} />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                corDeFundo={time.cor}
                key={indice}
                colaborador={colaborador}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
