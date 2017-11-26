import React from "react";
import "./App.css";
import LandPages from "./components/Seccion/Seccion.js";
// import SignUp from "./components/SignUp/SignUp.js";
// import Board from "./components/Board/Board.js";
// import Detail from "./components/DetailBoard/DetailBoard.js";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";


const Segurolandia = ({ active}) => {
  return <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <LandPages active={active} />} />
    </Switch>
  </HashRouter>;
};
const mapToProps = ({ active}) => ({ active});
export default connect(mapToProps)(Segurolandia);