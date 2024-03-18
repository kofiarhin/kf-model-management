import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ImageForm = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
  };
  return (
    <div>
      <div className="form-wrapper">
        <p className="text-large center">Upload Image</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="file" name="file " id="" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ImageForm;
