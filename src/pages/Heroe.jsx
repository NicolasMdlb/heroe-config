import Header from "./../components/Header";
import Button from "./../components/Button";
import Person from "./../components/Configurator/Person";
import styles from "./../styles/heroe.module.css";
import { useState } from "react";

const Heroe = () => {
  const titleHeader = "Configurer votre personnage";
  const [pointAvailable, setPointAvailable] = useState(7);
  const [image, setImage] = useState(1);
  const [name, setName] = useState("");
  const [skills, setSkills] = useState({ agility: 0, brain: 0, power: 0 });

  /**
   * Gestion de la sélection de l'image du personnage !!! att: Aujourd'hui il y a que trois images
   * @param {number} num valeur de 1 soit positive ou négative
   */
  const imageHandler = (num) => {
    setImage((oldImage) => {
      let newImage = { ...oldImage };
      newImage =
        oldImage + num > 3 ? 1 : oldImage + num < 1 ? 3 : oldImage + num;
      return newImage;
    });
  };

  /**
   * augmente la compétence
   * @param {string} skill compétence à mettre à jour
   */
  const addSkillHandler = (skillChanging) => {
    let newSkills = skills;
    let newPoint = pointAvailable;
    if (pointAvailable > 0 && skills[skillChanging] < 5) {
      newSkills[skillChanging]++;
      setSkills(newSkills);
      setPointAvailable(newPoint - 1);
    }
  };

  /**
   * réduire la compétence
   * @param {string} skill compétence à mettre à jour
   */
  const removeSkillHandler = (skillChanging) => {
    let newSkills = skills;
    let newPoint = pointAvailable;

    if (pointAvailable <= 7 && skills[skillChanging] > 0) {
      newSkills[skillChanging]--;
      setSkills(newSkills);
      setPointAvailable(newPoint + 1);
    }
  };

  return (
    <>
      <Header>{titleHeader}</Header>
      <div className={styles.configurator}>
        <Person
          image={image}
          skills={skills}
          points={pointAvailable}
          changeImage={imageHandler}
          addSkills={addSkillHandler}
          removeSkills={removeSkillHandler}
        />
        <div>Choix de l'arme</div>
      </div>
      <div className={styles.validPerson}>
        <Button styles="delete" click={() => alert("init")}>
          Réinitialiser
        </Button>
        <Button styles="add" click={() => alert("create")}>
          Créer
        </Button>
      </div>
    </>
  );
};

export default Heroe;
