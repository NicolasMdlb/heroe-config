import Header from "./../components/Header";
import Button from "./../components/Button";
import Person from "./../components/Configurator/Person";
import styles from "./../styles/heroe.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Heroe = (props) => {
  const titleHeader = "Configurer votre personnage";
  const [pointAvailable, setPointAvailable] = useState(7);
  const [loading, setLoading] = useState(false);
  const [imagePerson, setImagePerson] = useState(1);
  const [namePerson, setNamePerson] = useState("John Doe");
  const [weaponPerson, setWeaponPerson] = useState("");
  const [weaponsList, setWeaponsList] = useState(null);
  const [skillsPerson, setSkillsPerson] = useState({
    agility: 0,
    brain: 0,
    power: 0,
  });

  // récupère les données sur FireBase dans ce cas.
  useEffect(() => {
    setLoading(true);
    const fetchWeapons = async () => {
      try {
        const { data: responseWeapons } = await axios.get(
          "https://heroeconfig-default-rtdb.europe-west1.firebasedatabase.app/weapons.json"
        );
        setWeaponsList(Object.values(responseWeapons));
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchWeapons();
  }, []);

  /**
   * Gestion de la sélection de l'image du personnage !!! att: Aujourd'hui il y a que trois images
   * @param {number} num valeur de 1 soit positive ou négative
   */
  const imageHandler = (num) => {
    setImagePerson((oldImage) => {
      let newImage = { ...oldImage };
      newImage =
        oldImage + num > 3 ? 1 : oldImage + num < 1 ? 3 : oldImage + num;
      return newImage;
    });
  };

  /**
   * Permet de changer le nom
   * @param {string} nameChanging
   */
  const nameHandler = (nameChanging) => {
    setNamePerson(nameChanging);
  };

  /**
   * augmente la compétence
   * @param {string} skill compétence à mettre à jour
   */
  const addSkillHandler = (skillChanging) => {
    let newSkills = skillsPerson;
    let newPoint = pointAvailable;
    if (pointAvailable > 0 && skillsPerson[skillChanging] < 5) {
      newSkills[skillChanging]++;
      setSkillsPerson(newSkills);
      setPointAvailable(newPoint - 1);
    }
  };

  /**
   * réduire la compétence
   * @param {string} skill compétence à mettre à jour
   */
  const removeSkillHandler = (skillChanging) => {
    let newSkills = skillsPerson;
    let newPoint = pointAvailable;

    if (pointAvailable <= 7 && skillsPerson[skillChanging] > 0) {
      newSkills[skillChanging]--;
      setSkillsPerson(newSkills);
      setPointAvailable(newPoint + 1);
    }
  };

  /**
   * Permet la sélection de l'arme
   * @param {string} weaponChanging
   */
  const weaponHandler = (weaponChanging) => {
    setWeaponPerson(weaponChanging);
  };

  /**
   * Créer le heroe en base de donnée
   */
  const handleCreateHeroe = () => {
    const heroe = {
      image: imagePerson,
      name: namePerson,
      skills: skillsPerson,
      weapon: weaponPerson,
    };

    setLoading(true);
    axios
      .post(
        "https://heroeconfig-default-rtdb.europe-west1.firebasedatabase.app/heroes.json",
        heroe
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        handleResetPerson();
        props.refresh();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        handleResetPerson();
      });
  };

  /**
   * Réinitialise le configurateur à l'état initial
   */
  const handleResetPerson = () => {
    setPointAvailable(7);
    setImagePerson(1);
    setNamePerson("John Doe");
    setWeaponPerson("");
    setSkillsPerson({ agility: 0, brain: 0, power: 0 });
  };

  return (
    <>
      <Header>{titleHeader}</Header>
      <div className={styles.configurator}>
        <Person
          weapons={weaponsList}
          loading={loading}
          points={pointAvailable}
          name={namePerson}
          changeName={nameHandler}
          image={imagePerson}
          changeImage={imageHandler}
          skills={skillsPerson}
          addSkills={addSkillHandler}
          removeSkills={removeSkillHandler}
          weapon={weaponPerson}
          chooseWeapon={weaponHandler}
        />
      </div>
      <div className={styles.validPerson}>
        <Button styles="delete" click={() => handleResetPerson()}>
          Réinitialiser
        </Button>
        <Button styles="add" click={() => handleCreateHeroe()}>
          Créer
        </Button>
      </div>
    </>
  );
};

export default Heroe;
