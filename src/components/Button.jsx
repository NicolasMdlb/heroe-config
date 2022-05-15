import styles from "./../styles/button.module.css";

/**
 * Permet d'afficher un bouton en fonctions de propriétés
 * @param {*} props
 * @returns un bouton en fonction des propriétés indiqué
 */
const Button = (props) => {
  const style =
    props.styles === "add"
      ? styles.add
      : props.styles === "change"
      ? styles.change
      : styles.delete;

  return (
    <>
      <button className={style} onClick={props.click}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
