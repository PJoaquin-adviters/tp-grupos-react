import MemberCard from "../../components/MemberCard/MemberCard";
import "./Members.css";
const Members = () => {
  return (
    <section className="members-section">
      <h1>INTEGRANTRES DEL GRUPO 3</h1>
      <div className="members-cards-container">
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </section>
  );
};

export default Members;
