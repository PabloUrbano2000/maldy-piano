const Register = (aid) => {
  // inicializacion para mostrar plantillas (no confunidr con la configuracion inicial)
  var tp = window["tp"] || [];
  tp.push(["setAid", aid]);
  // activar si es para entorno sanbox con true
  tp.push(["setSandbox", "true"]);
  tp.push(["setDebug", "true"]);
  tp.push([
    "init",
    function () {
      /* CODIGO PARA LLAMAR LAS PLANTILLAS DE REGISTRO */
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
          localStorage.setItem("user-piano", JSON.stringify(data));

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
