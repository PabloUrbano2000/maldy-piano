import React from "react";
import Organic from "./components/signwall/Organic";
import PianoCore from "./piano/core";
import Register from "./piano/register";

export default function PianoApp() {
  const aid = "6UafT9Fjsu";
  React.useEffect(() => {
    //primera carga
    PianoCore(aid);

    // despues de 1.5 segundos se carga la plantilla
    setTimeout(() => {
      Register(aid);
    }, 1500);
  }, []);
  return (
    <div>
      <Organic />
    </div>
  );
}
