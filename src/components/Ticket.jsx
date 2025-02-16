import React, { useState } from "react";
import "./Ticket.css";
import "./Form.css";
import { Link } from "react-router";

const Ticket = () => {
  const [avater, setAvater] = useState(localStorage.getItem("image"));
  const [nameInfo, setNameInfo] = useState(() =>
    JSON.parse(localStorage.getItem("name"))
  );
  const [emailInfo, setEmailInfo] = useState(() =>
    JSON.parse(localStorage.getItem("email"))
  );
  const [textInfo, setTextInfo] = useState(() =>
    JSON.parse(localStorage.getItem("text"))
  );

  const userImage = JSON.parse(avater);

  console.log(userImage, "sss");

  return (
    <>
      <main>
        <section className="main-ticket-container">
          <section className="ticket-container">
            <div className="ticket-container-div">
              <h2>Ready</h2>
              <p>Step 3/3</p>
            </div>
            <div className="undeline-one">
              <div className="underline-innerline"></div>
            </div>
          </section>
          <section className="booked">
            <h2>Your Ticket is Booked!</h2>
            <p>You can download or Check your email for a copy</p>
          </section>

          <section className="user-details">
            <h2>Techember Fest ”25</h2>
            <div>
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>

            <div className="display-image">
              <img src={userImage} alt="" />
            </div>

            <div className="user-info">
              <p>{nameInfo}</p>
              <p>{emailInfo}</p>
              <p>{textInfo}</p>
            </div>
          </section>
        </section>

        <div className="form-buttons details-btn">
          <Link className="link" to="/">
            <button
              className="back-btn"
              role="button"
              aria-label="Go back to home, to start all over"
            >
              Book Another Ticket
            </button>
          </Link>
          <button
            type="submit"
            className="ticket-btn"
            role="button"
            aria-label="Download you ticket."
          >
            Download Ticket
          </button>
        </div>
      </main>
    </>
  );
};

export default Ticket;
