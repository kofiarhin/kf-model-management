import "./sideNav.styles.scss";
import { FaTimes } from "react-icons/fa";
import { close } from "../../features/Navigation/navigationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavLinks from "../Header/NavLinks/NavLinks";
import { logoutUser } from "../../features/auth/authSlice";
import { Link, NavLink } from "react-router-dom";
import { linkClass } from "../Header/HeaderHelper/headerHelper";

const SideNav = () => {
  const { isOpen } = useSelector((state) => state.navigation);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div id="sidenav" className={isOpen ? "active" : ""}>
      <FaTimes onClick={() => dispatch(close())} className="close" />
      <nav>
        <NavLink to="/models" className={linkClass}>
          Models
        </NavLink>
        <NavLink to="/castings" className={linkClass}>
          {" "}
          Castings
        </NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard" className={linkClass}>
              {" "}
              Dashboard
            </NavLink>
            <NavLinks user={user} />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={linkClass}>
              {" "}
              Login
            </NavLink>

            <NavLink to="/register" className={linkClass}>
              {" "}
              Register
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default SideNav;
