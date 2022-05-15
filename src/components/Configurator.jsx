import styles from "../styles/configurator.module.css"

const Configurator = (props) => {
  return (
    <div className={styles.configurator}>
      <div>Selection du personnage</div>
      <div>Chois de l'arme</div>
      <div>Nom du personnage</div>
    </div>
  );
};

export default Configurator;
