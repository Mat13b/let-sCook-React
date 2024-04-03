import React from "react";

function DisplayFooter() {
    return (
        <footer>
                <div>
                <img src="src/assets/footer.svg" alt=""  />
                </div>
                <div className="Pied">
                <img src="src/assets/download.jpg" alt="" width="200px"/>
                <div>
               <h1>Téléchargez Notre Livre de Recettes Gratuit </h1>
               <h6>Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !</h6>
                <p>© 2024</p> 
                </div>
                </div>
                <button>Telecharger maintenant !</button>
        </footer>
    );
}
export default DisplayFooter