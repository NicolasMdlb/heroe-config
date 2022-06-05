import ImagePerson from "./../Configurator/ImagePerson";
import SkillsPerson from "./SkillsPerson";
import WeaponsPerson from "./WeaponsPerson";
import TextField from "@mui/material/TextField";

const Person = (props) => {
  return (
    <>
      <div>
        <h4>Nom du personnage :</h4>
        <TextField
          variant="standard"
          value={props.name}
          onChange={(event) => props.changeName(event.target.value)}
        />
      </div>
      <ImagePerson num={props.image} changeImage={props.changeImage} />
      <SkillsPerson
        skills={props.skills}
        points={props.points}
        clickAdd={props.addSkills}
        clickRemove={props.removeSkills}
      />
      <WeaponsPerson
        weapons={props.weapons}
        loading={props.loading}
        weapon={props.weapon}
        chooseWeapon={props.chooseWeapon}
      />
    </>
  );
};

export default Person;
