import { Routes, Route, NavLink } from "react-router-dom"; // Removed Outlet
import "./App.css";
import { Home, Contact, NotFound, Projects, Resume } from "./pages";
import { useState, useEffect } from "react"; // Import useState

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State for mobile nav

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Close mobile nav when clicking outside of it or when window is resized
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

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="header-name">{"Joshua McCrystal"}</div>
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
            <NavLink to="/resume" onClick={() => setIsMobileNavOpen(false)}>
              Resume
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileNavOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main content area where routed components will render */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
