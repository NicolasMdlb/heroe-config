import Arc from "../../assets/images/armes/arc.png";
import Epee from "../../assets/images/armes/epee.png";
import Fleau from "../../assets/images/armes/fleau.png";
import Hache from "../../assets/images/armes/hache.png";
import styles from "../../styles/weapon.module.css";

const Weapon = (props) => {
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
    <div className={!props.active ? styles.weapon : styles.weaponSelected} onClick={() => props.click(props.weapon)}>
      <img src={imgWeapon} alt="arme" />
      <p>
        <em>{props.children}</em>
      </p>
    </div>
  );
};

export default Weapon;
