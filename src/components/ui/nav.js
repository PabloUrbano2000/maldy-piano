import React from "react";
import Offer from "../../piano/offer";
import Register from "../../piano/register";

export default function Nav({ aid }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand text-dark" href="#">
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
            <a class="nav-link" href="#">
              Pablo News
            </a>
          </li>
          {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              target="noreferrer">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
        <button
          class="btn btn-dark my-2 my-sm-0 mr-1"
          onClick={() => {
            Offer(aid);
          }}>
          Suscripciones
        </button>
        <a
          href="/#"
          class="btn btn-dark my-2 my-sm-0"
          onClick={() => {
            Register(aid);
          }}>
          REGÍSTRATE
        </a>
      </div>
    </nav>
  );
}
