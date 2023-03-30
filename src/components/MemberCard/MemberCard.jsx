import notFound from "../../img/usuario.png";
import "./MemberCard.css";
const MemberCard = () => {
  return (
    <div className="member-card">
      <img src={notFound} alt="" />
      <div className="info-text">
        <h3>Joaquin Parada</h3>
        <ul>
          <li>id: 1</li>
          <li>Telefono: 12312323</li>
          <li>Mail: 1231232342</li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
