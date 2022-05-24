import Header from "./../components/Header";
import Button from "./../components/Button";
import Person from "./../components/Configurator/Person";
import styles from "./../styles/heroe.module.css";
import { useState } from "react";

const Heroe = () => {
  const titleHeader = "Configurer votre personnage";
  const [pointAvailable, setPointAvailable] = useState(7);
  const [person, setPerson] = useState({
    image: 1,
    name: "toto",
    skills: { agility: 0, brain: 0, power: 0 },
  });

  /**
   * Gestion de la sélection de l'image du personnage !!! att: Aujourd'hui il y a que trois images
   * @param {number} num valeur de 1 soit positive ou négative
   */
  const imageHandler = (num) => {
    setPerson((oldPerson) => {
      const newPerson = { ...oldPerson };
      newPerson.image =
        oldPerson.image + num > 3
          ? 1
          : oldPerson.image + num < 1
          ? 3
          : oldPerson.image + num;
      return newPerson;
    });
  };

  /**
   * augmente
   * @param {string} skill compétence à mettre à jour
   * @param {number} num positif ou negatif à mettre à jour
   */
  const SkillPointsHandler = (num, skillChanging) => {
    console.log(num, skillChanging);
    setPerson((oldPerson) => {
      const newPerson = { ...oldPerson };

      if (oldPerson.skills[skillChanging] >= 5 || pointAvailable <= 0 || (pointAvailable === 7 && num === -1) )
        return oldPerson;

      newPerson.skills[skillChanging] = oldPerson.skills[skillChanging] + num;
      setPointAvailable((oldPoints) => oldPoints - num);

      return newPerson;
    });
  };

  return (
    <>
      <Header>{titleHeader}</Header>
      <div className={styles.configurator}>
        <Person
          {...person}
          points={pointAvailable}
          changeImage={imageHandler}
          addSkills={SkillPointsHandler}
          removecSkills={SkillPointsHandler}
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
