// upload image to cloudinary

// upload images
export const uploadImage = async (file, folder = "test") => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "gzbuxpwt");
  formData.append("folder", folder);

  const url = "https://api.cloudinary.com/v1_1/dlsiabgiw/image/upload";

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("image not uploaded");
  }

  const data = await response.json();
  return data.secure_url;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
