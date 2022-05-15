import Header from "../components/Header";
import Configurator from "../components/Configurator";
import Button from "../components/Button";
import "../styles/heroe.css"

const Heroe = () => {
  const titleHeader = "Configurer votre personnage";

  return (
    <>
      <Header>{titleHeader}</Header>
      <Configurator></Configurator>
      <div className="valid-configurator">
        <Button styles="delete" click={() => alert("init")}>Réinitialiser</Button>
        <Button styles="add" click={() => alert("create")}>Créer</Button>
      </div>
    </>
  );
};

export default Heroe;
