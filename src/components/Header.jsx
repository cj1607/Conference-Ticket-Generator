import ticket from "../assets/Vector.svg";
import ticz from "../assets/ticz.svg";
import line from "../assets/Line.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <main>
        <section className="container">
          <div className="logo">
            <div className="ticket-logo-container">
              <img src={ticket} alt="ticket icon" className="ticket" />
            </div>
            <img src={ticz} alt="image named ticz" className="ticz" />
          </div>
          <div className="link-list">
            <p>My Tickets</p>
            <p>About Project</p>
            <p>Events</p>
          </div>
          <div className="header-btn">
            <p>MY TICKETS</p>
            <img src={line} alt="an arrow image" className="arrow" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Header;
