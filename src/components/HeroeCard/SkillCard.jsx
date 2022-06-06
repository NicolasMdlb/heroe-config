import styles from "../../styles/skill.module.css";

const SkillCard = (props) => {
  let arrows = [];

  // permet d'afficher les fleches vertes
  for (let index = 0; index < props.points; index++) {
    arrows.push(<div key={index} className={styles.arrow}></div>);
  }

  return (
    <div className={styles.skillAll}>
      <span>
        <strong>{props.children}</strong>
      </span>
      <div className={styles.skillPoint}>
        <div className={styles.arrows}>{arrows}</div>
      </div>
    </div>
  );
};

export default SkillCard;
