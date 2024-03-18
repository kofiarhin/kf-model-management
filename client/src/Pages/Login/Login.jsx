import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const { email, password } = formData;
  useEffect(() => {
    if (user) {
      // navigate to dashboard;
      navigate("/dashboard");
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/dashboard");
    }
    if (isError) {
      setErrors(message.errors);
    }
  }, [isLoading, isSuccess, isError, message, user]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      email,
      password,
    };

    dispatch(loginUser(dataToSubmit));
  };

const renderError = (field) => {
  let item = null;
  errors.forEach((error, index) => {
    if (error.field === field) {
      item = error;
    }
  });

  if (item) {
    return <p className="error"> {item.message} </p>;
  }
};

  return (
    <div>
      <h1 className="heading center">Login</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.length > 0 ? renderError("email") : null}
          </div>

          <div className="input-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
            />

            {errors.length > 0 ? renderError("password") : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
