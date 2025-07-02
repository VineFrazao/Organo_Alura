import "./Campo.css";

const Campo = ({ type = "text", ...props }) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.label}</label>
      <input
        type={type}
        onChange={aoDigitado}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
