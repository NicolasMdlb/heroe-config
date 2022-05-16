import Header from "./../components/Header";
import Button from "./../components/Button";
import Person from "./../components/Configurator/Person";
import styles from "./../styles/heroe.module.css";
import { useState } from 'react';

const Heroe = () => {
  const titleHeader = "Configurer votre personnage";
  const [person, setPerson] = useState({image: 1, name: "toto", skills: {agility: 0, brain: 0, power:0}});

  const handlePerson = () =>{

  }

  return (
    <>
      <Header>{titleHeader}</Header>
      <div className={styles.configurator}>
        <Person {...person}/>
        <div>Chois de l'arme</div>
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
