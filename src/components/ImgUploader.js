import React, { useState } from "react";
import defaultImage from "../assets/default_image.png";
import Resizer from "react-image-file-resizer";
import axios from "axios";

const ImgUploader = (newImg) => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: defaultImage,
  });

  let inputRef;
  let file, img;
  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: img,
        preview_URL: fileReader.result,
      });
    };
  };

  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: defaultImage,
    });
  };

  return (
    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={saveImage}
        onClick={(e) => (e.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={image.preview_URL} />
      </div>
      <div className="upload-button" onClick={() => inputRef.click()}>
        +
      </div>
    </div>
  );
};

export default ImgUploader;
