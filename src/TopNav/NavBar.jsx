import React from "react";

function NavBar() {
    return (
        <header>
            <nav className="head">
                <div>
                <img src="src/assets/favicon.svg" alt="" width="100px" />
                </div>
                <div>
            <a href="">Accueil</a>
            <a href="">Recette</a>
            <a href="">Categorie</a>
            <a href="">Conseil de cuisine </a>     
                </div>
            </nav>
        </header>
    );
}
export default NavBar