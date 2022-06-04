import ImagePerson from "./../Configurator/ImagePerson";
import SkillsPerson from "./SkillsPerson";
import WeaponsPerson from "./WeaponsPerson";

const Person = (props) => {
  return (
    <>
      <ImagePerson num={props.image} changeImage={props.changeImage} />
      <SkillsPerson skills={props.skills} points={props.points} clickAdd={props.addSkills} clickRemove={props.removeSkills}/>
      <WeaponsPerson weapons={props.weapons} weapon={props.weapon} chooseWeapon={props.chooseWeapon}/>
    </>
  );
};

export default Person;
