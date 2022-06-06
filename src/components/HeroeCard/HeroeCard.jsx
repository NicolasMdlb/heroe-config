import SkillCard from "./SkillCard";
import Image1 from "../../assets/images/persos/player1.png";
import Image2 from "../../assets/images/persos/player2.png";
import Image3 from "../../assets/images/persos/player3.png";
import Arc from "../../assets/images/armes/arc.png";
import Epee from "../../assets/images/armes/epee.png";
import Fleau from "../../assets/images/armes/fleau.png";
import Hache from "../../assets/images/armes/hache.png";
import styles from "../../styles/heroeCard.module.css";

const HeroeCard = (props) => {
  let imgPerso =
    props.image === 1 ? Image1 : props.image === 2 ? Image2 : Image3;
  let imgWeapon;

  switch (props.weapon) {
    case "Epée":
      imgWeapon = Epee;
      break;
    case "Arc":
      imgWeapon = Arc;
      break;
    case "Fléau":
      imgWeapon = Fleau;
      break;
    default:
      imgWeapon = Hache;
      break;
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.persoWeapon}>
          <h3>{props.name}</h3>
          <img src={imgPerso} alt="Personne" />
        </div>
        <div className={styles.persoWeapon}>
          <img src={imgWeapon} alt="arme" />
          <p>
            <em>{props.weapon}</em>
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <SkillCard points={props.skills.agility}>Agilité :</SkillCard>
        <SkillCard points={props.skills.power}>Puissance :</SkillCard>
        <SkillCard points={props.skills.brain}>Intelligence :</SkillCard>
      </div>
    </div>
  );
};

export default HeroeCard;
