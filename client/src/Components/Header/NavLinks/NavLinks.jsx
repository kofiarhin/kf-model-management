import { Link, NavLink } from "react-router-dom";
import React from "react";
import { linkClass } from "../HeaderHelper/headerHelper";

const PhotographerLinks = () => {
  return (
    <>
      <NavLink to="/models" class={linkClass}>
        {" "}
        models{" "}
      </NavLink>
    </>
  );
};

const ModelLinks = () => {
  return (
    <>
      <NavLink to="/castings" class={linkClass}>
        Castings
      </NavLink>
    </>
  );
};

const AdminLinks = () => {
  return (
    <>
      <Link to="/Models"> Models</Link>
      <Link to="/castings"> Castings</Link>
    </>
  );
};
const NavLinks = ({ user }) => {
  return (
    <>
      {user.userType === "model" && <ModelLinks />}
      {user.userType === "photographer" && <PhotographerLinks />}
      {user.userType === "admin" && <AdminLinks />}
    </>
  );
};

export default NavLinks;
