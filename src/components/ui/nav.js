import React from "react";
import Logout from "../../piano/logout";
import Offer from "../../piano/offer";

export default function Nav({ aid }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand text-dark" href="/#">
        Maldy Producciones
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/#">
              Pablo News
            </a>
          </li>
        </ul>
        <button
          className="btn btn-dark my-2 my-sm-0 mr-1"
          onClick={() => {
            Offer(aid);
          }}>
          Suscripciones
        </button>
        <button
          type="button"
          class="btn btn-dark my-2 my-sm-0"
          onClick={() => {
            if (window.tp) {
              Logout();
              localStorage.removeItem("user-piano");
            }
          }}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
