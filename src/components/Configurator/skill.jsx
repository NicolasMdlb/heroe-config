import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import styles from "../../styles/skills.module.css";

const Skill = (props) => {
  return (
    <div className={styles.skills}>
      <strong>{props.children}</strong>
      <div className={styles.skillsPoint}>
        <RemoveCircleTwoToneIcon onClick={() => props.remove(-1, props.skill)} />
        {props.points}
        <AddCircleTwoToneIcon onClick={() => props.add(1, props.skill)} />
      </div>
    </div>
  );
};

export default Skill;
