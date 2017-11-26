import React from "react";
import "./App.css";
import LandPages from "./components/Seccion/Seccion.js";
import Admin from "./components/Users/User.js";
// import SignUp from "./components/SignUp/SignUp.js";
// import Board from "./components/Board/Board.js";
// import Detail from "./components/DetailBoard/DetailBoard.js";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";


const Segurolandia = ({ successLogin , user}) => {
  return <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <LandPages successLogin={successLogin} />} />
      <Route exact path="/Users" render={() => <Admin successLogin={successLogin} user={user} />} />
    </Switch>
  </HashRouter>;
};
const mapToProps = ({successLogin ,user}) => ({successLogin ,user});
export default connect(mapToProps)(Segurolandia);