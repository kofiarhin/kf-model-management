import { useState, useEffect } from "react";
import cities from "../../data/cities";
import { useDispatch, useSelector } from "react-redux";
import { createUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./register.styles.scss";

// register
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoading, isError, message, user } = useSelector(
    (state) => state.auth
  );

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    location: "",
    dob: "",
    instagramUrl: "",
    phoneNumber: "",
  });

  const [userType, setUserType] = useState("");

  const {
    name,
    email,
    password,
    gender,
    location,
    dob,
    phoneNumber,
    instagramUrl,
  } = formData;

  useEffect(() => {
    if (user) {
      // navigate to dashboard;
      navigate("/dashboard");
    }
    if (isSuccess) {
      // dispatch reset and navigate to login
      dispatch(reset());
      navigate("/login");
      setFormData({
        name: "",
        email: "",
        password: "",
        location: "",
        dob: "",
        instagramUrl: "",
        phoneNumber: "",
      });
    }
    if (isError) {
      console.log("errors");
      setErrors(message.errors);
    }
  }, [isLoading, isError, message, user]);

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
      gender,
      dob,
      instagramUrl,
      phoneNumber,
    };

    dispatch(createUser(dataToSubmit));
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
    <div id="register">
      <h1 className="heading center">Register</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={handleChange}
              />
              {errors.length > 0 ? renderError("name") : null}
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

            <div className="input-group">
              <label htmlFor="gender"> Gender</label>
              <select
                name="gender"
                id=""
                value={gender}
                onChange={handleChange}
              >
                <option value="">--select gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.length > 0 ? renderError("gender") : null}
            </div>

            <div className="input-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={handleChange}
              />
              {errors.length > 0 ? renderError("dob") : null}
            </div>

            <div className="input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
              {errors.length > 0 ? renderError("phoneNumber") : null}
            </div>

            <div className="input-group">
              <label htmlFor="instagramUrl">Instagram Url</label>
              <input
                type="text"
                name="instagramUrl"
                value={instagramUrl}
                placeholder="Enter your instagram url"
                onChange={handleChange}
              />
              {errors.length > 0 ? renderError("instagramUrl") : null}
            </div>

            <div className="input-group">
              <label htmlFor="location">Location</label>
              <select name="location" onChange={handleChange}>
                <option value="">--select location ---</option>
                {cities.map((city, index) => (
                  <option value={city} key={index}>
                    {" "}
                    {city}{" "}
                  </option>
                ))}
              </select>

              {errors.length > 0 ? renderError("location") : null}
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
              {errors.length > 0 ? renderError("userType") : null}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
