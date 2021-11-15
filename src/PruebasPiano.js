import * as React from "react";
import Nav from "./components/ui/nav";
import PDFReactApp from "./PDFReactApp";
import PianoCore from "./piano/core";

const PruebasPiano = () => {
  const aid = "PeVZORGJsu";
  React.useEffect(() => {
    PianoCore(aid);
  }, []);
  return (
    <div>
      <Nav aid={aid} />
      <PDFReactApp />
      <div id="formulario"></div>
    </div>
  );
};

export default PruebasPiano;
