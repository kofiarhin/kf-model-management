import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";
import { linkClass } from "./HeaderHelper/headerHelper";
import { FaBars } from "react-icons/fa";
import { open } from "../../features/Navigation/navigationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isLoading, isSuccess, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <header className="main-header">
        <div className="container">
          <Link to="/" className="logo">
            <h1>StarCast</h1>
          </Link>

          <nav>
            {user ? (
              <>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/dashboard" className={linkClass}>
                  Dashboard
                </NavLink>

                <NavLinks user={user} />
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/" className={linkClass}>
                  {" "}
                  Home{" "}
                </NavLink>

                <NavLink to="/models" className={linkClass}>
                  {" "}
                  Models{" "}
                </NavLink>
                <NavLink to="/castings" className={linkClass}>
                  {" "}
                  Castings
                </NavLink>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
                <NavLink to="/register" className={linkClass}>
                  Register
                </NavLink>
              </>
            )}
          </nav>
          <FaBars className="menu" onClick={() => dispatch(open())} />
        </div>
      </header>
    </div>
  );
};

export default Header;
