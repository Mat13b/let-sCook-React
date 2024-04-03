import React, { useEffect, useState } from "react";

const getDifficultyStars = (difficulty) => {
  return "★".repeat(difficulty);
};

function SearchTerm({ setSearchTerm }) {
  const [search, setSearch] = useState(""); // Terme de recherche saisi par l'utilisateur

  const handleSearch = () => {
    setSearchTerm(search.trim()); // Mettre à jour le terme de recherche dans le composant parent
  };
  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await fetch("src/Body/recettes.json");
      const jsonResponse = await response.json();
      setAllSearchTerm(jsonResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      {/* Composant de la barre de recherche */}
      <SearchBar setAllSearchTerm={setAllSearch} handleSearch={handleSearch} />
      {/* Affichage des recettes */}
      {allSearchTerm.map((receipe) => (
        <div key={receipe.id}>
          <h1>{receipe.title}</h1>
          <img src={receipe.imageUrl} alt={receipe.name} width="200px" />
          <p>{receipe.description}</p>
        </div>
      ))}
    </div>
  );
}

function SearchBar({ setSearchTerm, handleSearch }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-7 h-6"
          onClick={handleSearch}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Rechercher..."
        type="text"
        name="search"
        // Mettre à jour le terme de recherche lors de la saisie
        onChange={(e) => setSearchTerm(e.target.value)}
      
      />
    </label>
  );
}

export default SearchBar;
