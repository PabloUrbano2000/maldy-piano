const Logout = () => {
  const tp = window["tp"];
  tp.pianoId.logout();
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
};

export default Logout;
