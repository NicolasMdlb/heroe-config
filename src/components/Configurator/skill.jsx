import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import styles from "../../styles/skill.module.css";

const Skill = (props) => {
  let arrows = [];

  // permet d'afficher les fleches vertes 
  for (let index = 0; index < props.points; index++) {
    arrows.push(<div key={index} className={styles.arrow}></div>);
  }

  return (
    <div className={styles.skills}>
      <strong>{props.children}</strong>
      <div className={styles.skillsPoint}>
        <RemoveCircleTwoToneIcon onClick={() => props.remove(props.skill)} />
        <div className={styles.arrows}>{arrows}</div>
        <AddCircleTwoToneIcon onClick={() => props.add(props.skill)} />
      </div>
    </div>
  );
};

export default Skill;
