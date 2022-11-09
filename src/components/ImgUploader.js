import React from "react";

const ImgUploader = ({ preview_URL, setImage }) => {
  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  return (
    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        ref={(refParam) => (inputRef = refParam)}
        onChange={saveImage}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={preview_URL} />
      </div>
      <div className="upload-button" onClick={() => inputRef.click()}>
        +
      </div>
    </div>
  );
};

export default ImgUploader;
