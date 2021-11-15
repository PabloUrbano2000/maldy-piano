const Offer = (aid) => {
  // inicializacion para mostrar plantillas (no confunidr con la configuracion inicial)
  var tp = window["tp"] || [];
  // aid: es del entorno que estamos trabajando
  tp.push(["setAid", aid]);
  // activar si es para entorno sanbox con true
  tp.push(["setSandbox", "true"]);
  tp.push(["setDebug", "true"]);
  tp.push([
    "init",
    function () {
      tp.offer.show({
        // offer id es el codigo de las ofertas (no confundir con template)
        offerId: "OF43O622TZG1",
        // plantilla a llamar (puede ser cualquiera)
        templateId: "OTX4BFRDOGRN",
        // poner como se quiere visualizar
        displayMode: "modal",
      });
    },
  ]);
  // tp.experience.execute();
};

export default Offer;
