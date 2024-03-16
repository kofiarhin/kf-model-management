import { useState, useEffect } from "react";
import cities from "../../data/cities";
import { useDispatch, useSelector } from "react-redux";
import { createUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

// register
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const [userType, setUserType] = useState("");

  const { name, email, password, location } = formData;

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/login");
    }
  }, [isLoading, isSuccess]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
      password,
      userType,
      location,
    };
    console.log(dataToSubmit);
    dispatch(createUser(dataToSubmit));
  };

  return (
    <div>
      <h1 className="heading center">Register</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
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
          </div>

          <div className="input-group">
            <label htmlFor="location">Location</label>
            <select name="location" onChange={handleChange}>
              {cities.map((city, index) => (
                <option value={city} key={index}>
                  {" "}
                  {city}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="">Whieh one are you?</label>
            <div className="label-wrapper">
              <label>
                Photographer
                <input
                  type="radio"
                  name="userType"
                  value="photographer"
                  checked={userType === "photographer"}
                  onChange={handleUserTypeChange}
                />
              </label>

              <label>
                Model
                <input
                  type="radio"
                  name="userType"
                  value="model"
                  checked={userType === "model"}
                  onChange={handleUserTypeChange}
                />
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
