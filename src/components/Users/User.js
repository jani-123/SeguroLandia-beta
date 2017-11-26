import React from "react";
import { signOut } from '../../actions/actions'
//import trello from '../../trello-logo.png';
//import './landpages.css'
import { NavLink, Redirect } from "react-router-dom";


const Admin = ({ successLogin, user }) => {
  return (
    <div>
      Buenvenido
      {!successLogin && <Redirect to="/" />}
      <h1>{user.email}</h1>
      <button className="btn-link " onClick={signOut}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Admin;