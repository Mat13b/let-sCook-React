import React, { useState, useEffect } from "react";

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
      <main>
        <h1>Toutes les recettes</h1>
        {allRecette.map((receipe, index) => (
          <div key={receipe.id}>
            <article>
              <h1>{receipe.title}</h1>
              
              <img src={receipe.imageUrl} alt={receipe.name} width="200px" />
              <p>{receipe.description}</p>
            </article>
          </div>
        ))}
      </main>
    </>
  );
}
export default DisplayBody;
