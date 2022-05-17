import ImagePerson from "./../Configurator/ImagePerson";
import SkillsPerson from "./SkillsPerson";

const Person = (props) => {
  return (
    <>
      <div>
        <h4>Sélection du personnage</h4>
        <ImagePerson num={props.image} changeImage={props.changeImage} />
      </div>
      <div>
        <h4>Caractéristiques : </h4>
        <em>
          Dispo : {props.points} point{props.points > 1 && "s"}
        </em>
        {/* Todo: faire les points caractéristiques  */}
        <SkillsPerson skills={props.skills} points={props.points} />
      </div>
    </>
  );
};

export default Person;
