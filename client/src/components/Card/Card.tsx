import "./Card.css";

function Card() {
  return (
    <figure className="fig-program">
      <img
        src="https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg"
        alt="poster"
      />
      <h2>The Good Place</h2>
      <h3>Synopsis :</h3>
      <p>
        À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis
        fantaisiste réservé aux individus exceptionnellement bienveillants. Or
        Eleanor n'est pas exactement une « bonne personne » et comprend vite
        qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue
        âme sœur dans l'au-delà, la jeune femme est bien décidée à se
        redécouvrir.
      </p>
      <h3>Country</h3>
      <p>USA</p>
      <h3>Year</h3>
      <p>2016</p>
    </figure>
  );
}

export default Card;
