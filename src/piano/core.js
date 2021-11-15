const PIANO_URL = "//sandbox.tinypass.com/xbuilder/experience/load?aid=";
const PianoCore = (aid) => {
  // por pabliiiito
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;
  a.src = `${PIANO_URL}${aid}`;
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);

  // original
  (function (src) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = src;
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  })("https://sandbox.tinypass.com/xbuilder/experience/load?aid=PeVZORGJsu");
};
export default PianoCore;
