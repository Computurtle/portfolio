import { Routes, Route, NavLink } from "react-router-dom"; // Removed Outlet
import "./App.css";
import { Home, Contact, NotFound, Projects, Resume } from "./pages";

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="header-name">{"Joshua McCrystal"}</div>
          <nav className="header-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
