import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function NavBar() {
  return (
    <header>
      <nav className="head">
        <div className="Logo">
          <img src="src/assets/favicon.svg" alt="" width="100px" />
          </div>
          <a className="link" href="">Accueil</a>
          <a className="link" href="">Recette</a>
          <a className="link" href="">Categorie</a>
          <a className="link" href="">Conseil de cuisine </a>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-10 h-10"
              color="red"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </button>
          <IconButton sx={{   }}>
            <Avatar
              alt=""
              src="src/assets/photo-1472099645785-5658abf4ff4e.avif"
            />
          </IconButton>
      </nav>
    </header>
  );
}
export default NavBar;
