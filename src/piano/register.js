const Register = (aid) => {
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
      // tp.offer.show({
      //   offerId: "OF43O622TZG1",
      //   templateId: "OT15JQPQ9YXO",
      //   displayMode: "modal",
      // });

      /* cODIGO PARA LLAMAR LAS PLANTILLAS DE REGISTRO */
      tp.pianoId.show({
        // Dos formas de llamar su despliegue
        // displayMode: "modal",
        displayMode: "inline",
        containerSelector: "#pianoform",
        // template de pianoID para cuando te registras
        screen: "register",
        // screen: "login",
        // metodos extras para llamar al template
        loggedIn: function (data) {
          console.log("user ", data.user, " logged in with token", data.token);
        },
        loggedOut: function () {
          console.log("user logged out");
        },
      });
    },
  ]);
};

export default Register;
