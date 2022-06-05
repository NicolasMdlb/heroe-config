import Image1 from "../../assets/images/persos/player1.png";
import Image2 from "../../assets/images/persos/player2.png";
import Image3 from "../../assets/images/persos/player3.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "../../styles/imagePerson.module.css";
import { cyan } from "@mui/material/colors";

const ImagePerson = (props) => {
  let imgPerso = props.num === 1 ? Image1 : props.num === 2 ? Image2 : Image3;

  return (
    <div>
      <h4>Sélection du personnage :</h4>
      <div className={styles.selectImage}>
        <ArrowCircleLeftIcon
          sx={{ fontSize: 40, color: cyan.A400 }}
          onClick={() => props.changeImage(-1)}
        />
        <img src={imgPerso} alt="personnage" />
        <ArrowCircleRightIcon
          sx={{ fontSize: 40, color: cyan.A400 }}
          onClick={() => props.changeImage(+1)}
        />
      </div>
    </div>
  );
};

export default ImagePerson;
