import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Programs.css";

interface Program {
  id: number;
  poster: string;
  title: string;
  synopsis: string;
  country: string;
  year: string;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  console.log("Voici mes programs", programs);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <main className="main-programs">
      <h1>Listes des séries</h1>
      <div className="box-programs">
        {programs.map((el) => (
          <Card
            key={el.id}
            poster={el.poster}
            title={el.title}
            synopsis={el.synopsis}
            country={el.country}
            year={el.year}
          />
        ))}
      </div>
    </main>
  );
}

export default Programs;
