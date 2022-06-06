import { useState, useEffect } from "react";
import axios from "axios";
import HeroeCard from "../components/HeroeCard/HeroeCard";
import styles from "./../styles/heroes.module.css";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHeroes = async () => {
    try {
      const { data: responseHeroes } = await axios.get(
        "https://heroeconfig-default-rtdb.europe-west1.firebasedatabase.app/heroes.json"
      );
      setHeroes(Object.values(responseHeroes));
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  // récupère les données sur FireBase dans ce cas.
  useEffect(() => {
    setLoading(true);

    fetchHeroes();
  }, [heroes]);

  return (
    <div>
      <header className={styles.header}>
        <h2>Liste des héros</h2>
      </header>
      <div className={styles.displayCard}>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          heroes.length > 0 &&
          heroes.map((heroe, index) => {
            return <HeroeCard key={index} {...heroe} />;
          })
        )}
      </div>
    </div>
  );
};

export default Heroes;
