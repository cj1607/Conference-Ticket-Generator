import { useState } from "react";
import info from "../assets/images/icon-info.svg";
import upload from "../assets/images/icon-upload.svg";
export default function ImageInput() {
  const [imageUrl, setImageUrl] = useState();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <fieldset>
      <label htmlFor="upload-image" className="w-full font-bold block mb-1">
        Upload Avatar
      </label>
      <input
        type="file"
        name="upload-image"
        id="upload-image"
        onChange={handleImageUpload}
        className="hidden"
      />
      <label
        htmlFor="upload-image"
        className="block text-center p-4 border border-dashed rounded-lg mb-2"
      >
        <img
          className="p-2 rounded-md mx-auto mb-4 border w-1/5"
          src={imageUrl ?? upload}
          alt="upload icon"
        />
        <p>Drag and drop or click to upload</p>
      </label>
      <p className="flex items-center gap-2">
        <img src={info} alt="info" />
        <small>Upload your photo (JPG or PNG, max size: 500KB).</small>
      </p>
    </fieldset>
  );
}
