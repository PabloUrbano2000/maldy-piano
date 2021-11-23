import React from "react";
import Register from "../../piano/register";

export default function PianoForm({ aid }) {
  // despues de 1.5 segundos se carga la plantilla
  setTimeout(() => {
    Register(aid);
  }, 1500);
  return (
    <div id="pianoform" style={{ height: "100%", overflowX: "hidden" }}></div>
  );
}
