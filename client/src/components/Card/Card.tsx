import "./Card.css";
import { useState } from "react";

interface CardProps {
  poster: string;
  title: string;
  synopsis: string;
  country: string;
  year: string;
}

function Card({ poster, title, synopsis, country, year }: CardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = async () => {
    setLiked((prev) => !prev);
  };

  return (
    <figure className="fig-program">
      <img src={poster} alt={title} />

      <h2>{title}</h2>

      <h3>Synopsis :</h3>
      <p>{synopsis}</p>

      <h3>Country</h3>
      <p>{country}</p>

      <h3>Year</h3>
      <p>{year}</p>

      {/* Bouton coeur favori */}
      <button
        type="button"
        className="heart-btn"
        onClick={toggleLike}
        aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        <img
          src={liked ? "/ico/heart-filled.svg" : "/ico/heart-outline.svg"}
          alt="coeur"
        />
      </button>
    </figure>
  );
}

export default Card;
