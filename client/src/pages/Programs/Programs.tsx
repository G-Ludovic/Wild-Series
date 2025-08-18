import { useEffect, useState } from "react";
import "./Programs.css";

function Programs() {
  const [arrayOfPrograms, setArrayOfPrograms] = useState([]);

  console.log("Voici arrayOfPrograms", arrayOfPrograms);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setArrayOfPrograms(data));
  }, []);

  return;
}

export default Programs;
