import ImagePerson from "./../Configurator/ImagePerson";

const Person = (props) => {
  return (
    <>
      <div>
        <h4>Sélection du personnage</h4>
        <ImagePerson num={props.image} />
      </div>
      <div>
        <h4>Caractéristiques </h4>
        <p>
          <strong>Agilité : </strong>
          {props.skills.agility}
        </p>
        <p>
          <strong>Force : </strong>
          {props.skills.power}
        </p>
        <p>
          <strong>Intelligence : </strong>
          {props.skills.brain}
        </p>
      </div>
    </>
  );
};

export default Person;
