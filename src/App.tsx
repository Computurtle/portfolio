import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Home, NotFound, Projects } from "./pages";
import { useState, useEffect } from "react";
import headshot from "./assets/headshot.png";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMobileNavOpen &&
        !target.closest(".header-nav") &&
        !target.closest(".hamburger-menu")
      ) {
        setIsMobileNavOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileNavOpen]);

  const resumePdfUrl = "documents/Joshua_McCrystal_Resume.pdf";
  const contactEmail = "contact@jmccrystal.dev";

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="header-identity">
            <div className="header-avatar">
              <img src={headshot} alt="Joshua McCrystal" />
            </div>
            <div className="header-name">{"Joshua McCrystal"}</div>
          </div>
          <button
            className={`hamburger-menu ${isMobileNavOpen ? "open" : ""}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          <nav
            className={`header-nav ${isMobileNavOpen ? "mobile-nav-open" : ""}`}
          >
            <NavLink to="/" onClick={() => setIsMobileNavOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsMobileNavOpen(false)}>
              Projects
            </NavLink>
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileNavOpen(false)} // Optional: Close mobile nav on click
            >
              Resume
            </a>
            <a
              href={`mailto:${contactEmail}`}
              onClick={() => setIsMobileNavOpen(false)} // Optional: Close mobile nav on click
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
