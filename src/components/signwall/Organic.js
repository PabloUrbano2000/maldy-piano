import React from "react";
import PianoForm from "./PianoForm";

export default function Organic({ aid }) {
  return (
    <div id="sign-modal">
      <div className="signwall-modal open">
        <div className="body-modal position-middle size-medium bottom-trome">
          <header
            className="profile-header__wrapper border-trome"
            style={{
              background: "rgb(255, 101, 15)",
              color: "rgb(255, 255, 255)",
            }}>
            <div className="profile-header__content">
              <button className="profile-header__back" type="button"></button>
              <div className="profile-header__logo">
                <div className="cont cont_trome cont_left">
                  <img
                    alt="Logo trome"
                    src="https://signwall.e3.pe/images/trome/logo-orange.png"
                  />
                </div>
              </div>
              <button
                className="profile-header__close"
                type="button"
                onClick={() => {
                  window.location.href = "/";
                }}>
                <svg width="14" height="14">
                  <g fill="#ffffff">
                    <path d="M11.63.4l-9.91 9.92 8.6-8.6-9.91 9.91a1.39 1.39 0 0 0 1.96 1.96l9.91-9.91-8.6 8.6 9.92-9.9A1.39 1.39 0 0 0 11.64.4z"></path>
                    <path d="M13.6 11.63L3.67 1.72l8.6 8.6L2.37.41A1.39 1.39 0 0 0 .4 2.37l9.91 9.91-8.6-8.6 9.9 9.91a1.39 1.39 0 0 0 1.97-1.96z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </header>

          {/* TODO EL CONTENEDOR VA VENIR DESDE PIANO */}
          {/* <PianoForm /> */}
          <div className="cont-modal" style={{ height: "calc(100% - 50px)" }}>
            <div className="left-modal bg-trome">
              <div className="sign-auth_benefits-cont"></div>
            </div>
            <div
              className="right-modal"
              style={{ overflowY: "auto", overflowX: "none" }}>
              <PianoForm aid={aid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
