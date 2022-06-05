import Weapon from "./Weapon";
import styles from "../../styles/weaponsPerson.module.css";

const WeaponsPerson = (props) => {
  return (
    <div className={styles.weaponsPerson}>
      <h4>Sélection de l'arme :</h4>
      <div className={styles.weapons}>
        {props.loading || props.weapons == null ? (
          <p>Chargement...</p>
        ) : (
          props.weapons.map((weapon) => {
            return (
              <Weapon
                key={weapon}
                weapon={weapon}
                active={props.weapon === weapon}
                click={props.chooseWeapon}
              >
                {weapon}
              </Weapon>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WeaponsPerson;
