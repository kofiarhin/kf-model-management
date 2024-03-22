import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { uploadImage } from "../../utils/helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const ImageForm = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files) {
      return;
    }

    try {
      setIsLoading(true);
      const urls = await Promise.all(
        Object.values(files).map(async (item) => {
          const url = await uploadImage(item, "test-dev");
          return url;
        })
      );

      // save urls in backend
      const res = await fetch(`/api/images/${user._id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ images: urls }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log("something went wrong");
        return;
      }

      toast.success("images successfully uploaded");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="form-wrapper">
        <p className="text-large center">Upload Image</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="file"
              name="file "
              id=""
              onChange={handleChange}
              multiple
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ImageForm;
