import "./header.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

const photographerLinks = () => {
  return (
    <>
      <Link to="/models"> Models </Link>
    </>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    if (!user) {
      // navigate to login
      navigate("/login");
    }
  }, [isLoading, isSuccess, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <header className="main-header">
        <div className="container">
          <Link to="/">
            <h1>Logo</h1>
          </Link>

          <nav>
            {user ? (
              <>
                <NavLinks user={user} />
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
