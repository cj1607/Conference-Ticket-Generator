import { Link } from "react-router";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <main className="container-parent">
        <section className="container-child">
          <section className="pricing-container-one">
            <div className="Ticket-Selection">
              <h2>Ticket Selection</h2>
              <p>Step 1/3</p>
            </div>
            <div className="undeline-one">
              <div className="underline-innerline"></div>
            </div>
          </section>
          <section className="pricing-container-two">
            <div className="details-container">
              <h2>Techember Fest ”25</h2>
              <p>
                Join us for an unforgettable experience at <br />
                [Event Name]! Secure your spot now.
              </p>
              <p>📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
            </div>

            <div className="undeline-two"></div>

            <div className="selected-p">
              <p>Select Ticket Type</p>
            </div>

            <div className="pricing-box-container">
              <div className="price-box" tabindex="0">
                <h2>Free</h2>
                <p>REGULAR ACCESS</p>
                <p className="p2">20/52</p>
              </div>
              <div className="price-box" tabindex="0">
                <h2>$150</h2>
                <p>VIP ACCCESS</p>
                <p className="p2">20/52</p>
              </div>
              <div className="price-box" tabindex="0">
                <h2>$250</h2>
                <p>VVIP ACCESS</p>
                <p className="p2">20/52</p>
              </div>
            </div>
            <div className="numbers-p">
              <p>Number of Tickets</p>
            </div>

              <div className="ticket-amount-input">
                <select name="number" id="number" className="number" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="pricing-buttons">
                <Link to="/Form" className="link">
                  <button
                    className="next-btn"
                    role="button"
                    aria-label="click next to continue, to fill out info details."
                  >
                    Next
                  </button>
                </Link>
                <button
                  className="cancel-btn"
                  role="button"
                  aria-label="Click cancel to terminate process."
                >
                  Cancel
                </button>
              </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Pricing;
