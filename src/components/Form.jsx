import "./Form.css";
import upload from "../assets/icon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Form() {
  const [avater, setAvater] = useState(localStorage.getItem("name"));
  const [nameInfo, setNameInfo] = useState(() =>
    JSON.parse(localStorage.getItem("name"))
  );
  const [emailInfo, setEmailInfo] = useState(() =>
    JSON.parse(localStorage.getItem("email"))
  );
  const [textInfo, setTextInfo] = useState(() =>
    JSON.parse(localStorage.getItem("text"))
  );
  // const [accepted,setAccepted] = useState(false)
  const navigate = useNavigate();

  const cloudName = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
  const uploadPreset = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;

  const handleImage = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) {
      alert("Please select an image before uploading.");
      return;
    }

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        localStorage.setItem("image", JSON.stringify(data.secure_url));
        setAvater(JSON.stringify(data.secure_url));

        console.log(data.secure_url);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("A jpeg/png file could not be found");
    }
  };

  let image = JSON.parse(avater);  

  const handleUpload = async (event) => {
    event.preventDefault();

    localStorage.setItem("name", JSON.stringify(nameInfo));
    localStorage.setItem("email", JSON.stringify(emailInfo));
    localStorage.setItem("text", JSON.stringify(textInfo));

    navigate("/Ticket", { replace: true });
  };

  return (
    <>
      <main className="form-container-parent">
        <form className="form-container-child" onSubmit={handleUpload}>
          <section className="pricing-container-one">
            <div className="Ticket-Selection">
              <h2>Attendee Details</h2>
              <p>Step 2/3</p>
            </div>
            <div className="undeline-one">
              <div className="underline-innerline"></div>
            </div>
          </section>
          <section>
            <div className="form-upload-input">
              <p>Upload Profile Photo</p>
              <div className="form-upload-input-div" tabIndex="0">
                <label
                  htmlFor="upload-input"
                  className=""
                  role="button"
                  aria-label="Upload photo. Press Enter or Space to open file selection."
                >
                  <img src={upload} alt="" />
                  <p>Drag & drop or click to</p>
                  <p>upload</p>
                </label>
                <input
                  type="file"
                  id="upload-input"
                  name="mainImage"
                  accept="image/jpeg, image/png"
                  onChange={handleImage}
                  style={{ opacity: 0, width: 0, height: 0 }}
                  role="button"
                  aria-label="Upload photo. Press Enter or Space to open file selection."
                  required
                />
              </div>
              <div className="verify-image">
              <img src={image} alt="" />
              <div><h6>{image}</h6></div>
              </div>
            </div>
            <div className="undeline-two"></div>

            <div className="div-input">
              <label htmlFor="">Enter your name</label>
              <input
                type="text"
                name=""
                id=""
                value={nameInfo}
                onChange={(e) => {
                  setNameInfo(e.target.value);
                  localStorage.setItem("name", JSON.stringify(nameInfo));
                }}
                role="input"
                aria-label="Input name. Press Enter or Space to fill in your name."
                required
              />
            </div>
            <div className="div-input">
              <label htmlFor="">Enter your email*</label>
              <input
                type="email"
                placeholder="hello@avioflagos.io"
                value={emailInfo}
                onChange={(e) => {
                  setEmailInfo(e.target.value);
                  localStorage.setItem("email", JSON.stringify(emailInfo));
                }}
                role="input"
                aria-label="input email address. Press Enter or Space to fill in your email."
                required
              />
            </div>
            <div className="div-input">
              <label htmlFor="">About the project </label>
              <textarea
                name=""
                id=""
                className="text-area"
                placeholder="Textarea"
                value={textInfo}
                onChange={(e) => {
                  setTextInfo(e.target.value);
                  localStorage.setItem("text", JSON.stringify(textInfo));
                }}
                role="textarea"
                aria-label="write about what your expectations are for the program."
                required
              ></textarea>
            </div>

            <div className="form-buttons">
              <Link className="link" to="/">
                <button
                  className="back-btn"
                  role="button"
                  aria-label="click back to start from beginning"
                >
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="ticket-btn"
                role="button"
                aria-label="click to get your ticket"
              >
                Get My Tree Ticket
              </button>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

export default Form;
