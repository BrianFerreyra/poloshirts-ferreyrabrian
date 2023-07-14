import "./Counter.Module.css";
const Counter = ({ contador, setContador }) => {
  return (
    <div>
      <h2 className="NumContador">{contador}</h2>
      <button onClick={() => setContador(contador + 1)} className="sumarButton">
        Sumar
      </button>
      <button
        onClick={() => setContador(contador - 1)}
        className="restarButton"
      >
        Restar
      </button>
    </div>
  );
};

export default Counter;
