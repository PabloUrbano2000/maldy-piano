import React from "react";
import Organic from "./components/signwall/Organic";
import PianoForm from "./components/signwall/PianoForm";
import Nav from "./components/ui/nav";
import JsPDFApp from "./JsPDFApp";
import PDFReactApp from "./PDFReactApp";
import PianoCore from "./piano/core";

//----------TROME----------COMERCIO------
const aid = "6UafT9Fjsu" /*"PeVZORGJsu"*/;

export default function PianoApp() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user-piano")) || null;

    setUser(userLocal);

    //primera carga
    PianoCore(aid);
  }, []);
  return (
    <>
      {user ? (
        <>
          <Nav />
          <PDFReactApp />
        </>
      ) : (
        <Organic aid={aid} />
        // <PianoForm />
      )}
    </>
  );
}
