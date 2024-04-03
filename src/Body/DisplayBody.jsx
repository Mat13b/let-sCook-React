import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
{/* <import SearchTerm from "src/SearchBar/SearchBar";> */}

const getDifficultyStars = (difficulty) => {
  return "★".repeat(difficulty);
};

function DisplayBody() {
  const [allRecette, setAllRecette] = useState([]);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await fetch("src/Body/recettes.json");
      const jsonResponse = await response.json();
      setAllRecette(jsonResponse);
      console.log(jsonResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>  
      <h1>Toutes les recettes</h1>
      <main className="display: flex">
        {allRecette.map((receipe, index) => (
          <div key={receipe.id}>
            <div className="container">
              <article>
                <h2>{receipe.title}</h2>
                <img src={receipe.imageUrl} alt={receipe.name} width="200px" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="fill"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="red"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <div className="product">
                  <h3>{receipe.author}</h3>
                  <p>{getDifficultyStars(receipe.difficulty)}</p>
                  <span className="tag">{receipe.category}</span>
                </div>
                <p>{receipe.description}</p>
              </article>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default DisplayBody;
