import React, { useState } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import ImgUploader from "../components/ImgUploader";
import HistoryTop from "../components/HistoryTop";
import { MdPersonAddAlt1 } from "react-icons/md";

const HistoryEdit = ({ user }) => {
  const fileInput = React.useRef();

  const [imgUpload, setImgUpload] = useState();

  const handleImgButtonClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleChange = (event) => {
    if (event.target.files.length !== 0) {
      const formData = new FormData();
      formData.append("img", event.target.files[0]);
      const imgSrc = URL.createObjectURL(event.target.files[0]);
      setImgUpload(imgSrc);
      user.photos[0].img = imgSrc;
    }
  };
  return (
    <div>
      <HistoryTop />
      <History user={user} trace="Edit" />
      <button onClick={handleImgButtonClick}>+</button>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        ref={fileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {imgUpload ? <img src={imgUpload} /> : null}
      <button>
        <MdPersonAddAlt1 />
      </button>
      <Link to="/history/view">
        <button type="button">완료</button>
      </Link>
    </div>
  );
};
export default HistoryEdit;
