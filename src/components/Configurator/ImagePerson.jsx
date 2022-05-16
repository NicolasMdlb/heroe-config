import Image1 from "../../assets/images/persos/player1.png";
import Image2 from "../../assets/images/persos/player2.png";
import Image3 from "../../assets/images/persos/player3.png";

const ImagePerson = (props) => {
  let imgPerso = props.num === 1 ? Image1 : props.num === 2 ? Image2 : Image3;

  return (
    <>
      <img src={imgPerso} alt="personnage" />
    </>
  );
};

export default ImagePerson;
