import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import cities from "../../data/cities";
import { uploadImage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const CreateCasting = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "test",
    location: "sheffield",
    message: "some message here",
    startDate: "2024-03-21",
    endDate: "2024-03-22",
    paid: false,
  });

  const { title, message, location, startDate, endDate, paid } = formData;

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = await uploadImage(file, "test-dev");

      const dataToSubmit = {
        title,
        location,
        message,
        paid,
        startDate,
        endDate,
        image: url,
      };
      const res = await fetch("/api/castings", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(dataToSubmit),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        toast.error("something went wrong");
        return;
      }

      toast.success("casting created successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="heading center">Create Casting</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
              placeholder="Enter Title"
            />
          </div>

          <div className="input-group">
            <label htmlFor="title">Message</label>
            <textarea
              name="message"
              value={message}
              placeholder="Enter details..."
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="location">Location</label>
            <select name="location" onChange={handleChange} value={location}>
              <option value="">--select location--</option>
              {cities.map((city) => {
                return (
                  <option key={city} value={city}>
                    {" "}
                    {city}{" "}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="files">Add Image</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="startDate">End Date</label>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="paid">Paid</label>
            <select name="paid" onChange={handleChange} value={paid}>
              <option value=""> --select paid--</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCasting;
