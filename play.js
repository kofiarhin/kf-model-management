// UploadImage.js

import React, { useState } from "react";
import {
  Image,
  Transformation,
  CloudinaryContext,
  upload,
} from "cloudinary-react";

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");
    formData.append("folder", "your_folder_name");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && <Image publicId={image} />}
    </div>
  );
}

export default UploadImage;
