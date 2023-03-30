import "./GroupCard.css";

const GroupCard = ({ titulo }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <button className="btn-rosa" type="submit">
        Mostrar más
      </button>
    </div>
  );
};

export default GroupCard;
