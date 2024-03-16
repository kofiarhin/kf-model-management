import { Link } from "react-router-dom";
import React from "react";

const PhotographerLinks = () => {
  return (
    <>
      <Link to="/models"> Models</Link>
    </>
  );
};

const ModelLinks = () => {
  return (
    <>
      <Link to="/castings"> Castings</Link>
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
