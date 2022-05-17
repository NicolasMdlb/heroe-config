const SkillsPerson = (props) => {
  return (
    <>
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
    </>
  );
};

export default SkillsPerson;
