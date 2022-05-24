import Skill from "./skill";

const SkillsPerson = (props) => {
  return (
    <div>
      <p>
        <em>
          Dispo : {props.points} point{props.points > 1 && "s"}
        </em>
      </p>
      <Skill points={props.skills.agility} skill="agility" add={props.clickAdd} remove={props.clickRemove}>Agilité :</Skill>
      <Skill points={props.skills.power} skill="power" add={props.clickAdd} remove={props.clickRemove}>Puissance :</Skill>
      <Skill points={props.skills.brain} skill="brain" add={props.clickAdd} remove={props.clickRemove}>Intelligence :</Skill>
    </div>
  );
};

export default SkillsPerson;
