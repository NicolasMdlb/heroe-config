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
        <SkillsPerson skills={props.skills} points={props.points} clickAdd={props.addSkills} clickRemove={props.removeSkills}/>
      </div>
    </>
  );
};

export default Person;
