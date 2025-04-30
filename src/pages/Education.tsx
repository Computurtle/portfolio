import "./Education.css";

function Education() {
  return (
    <div className="education-page">
      <h1>Education</h1>

      <section className="education-section latest-education-section">
        <div className="education-header">
          <h2>
            <i className="fas fa-star"></i> Latest Education
          </h2>
          <span className="education-years">
            <i className="fas fa-calendar-alt"></i> Feb, 2022 - Current
          </span>
        </div>
        <div className="education-details">
          <h3>Bachelor of Computer Science majoring in Software Engineering</h3>
          <p className="institution">
            <i className="fas fa-building"></i> Edith Cowan University
          </p>
          {/* Add description here if needed */}
        </div>
        <div className="key-learnings">
          {/* Key learning bubbles */}
          <span className="learning-bubble">Software Engineering</span>
          <span className="learning-bubble">Programming</span>
          <span className="learning-bubble">Algorithms</span>
          <span className="learning-bubble">Data Structures</span>
          <span className="learning-bubble">Databases</span>
          <span className="learning-bubble">Networking</span>
        </div>

        <div className="unit-results">
          <h3>Top Unit Results</h3>
          <table>
            <thead>
              <tr>
                <th>Unit Name</th>
                <th>Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Object-oriented Programming with C++</td>
                <td>93</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Programming Principles</td>
                <td>92</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Systems and Database Design</td>
                <td>88</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Introduction to Mobile Applications Development</td>
                <td>86</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Mathematics for Computing</td>
                <td>84</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Intelligent Systems</td>
                <td>83</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Distributed Systems</td>
                <td>80</td>
                <td>HD</td>
              </tr>
              <tr>
                <td>Data Structures</td>
                <td>80</td>
                <td>HD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="education-section older-education-section">
        <h2>Older Education & Certificates</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>Certificate in Higher Education</h3>
            <span className="education-years">
              <i className="fas fa-calendar-alt"></i> July, 2021 - November,
              2021
            </span>
          </div>
          <p className="institution">
            <i className="fas fa-building"></i> Edith Cowan University
          </p>
          <div className="key-learnings">
            {/* Key learning bubbles */}
            <span className="learning-bubble">Academic Writing</span>
            <span className="learning-bubble">Research Skills</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>Certificate IV in Digital and Interactive Games</h3>
            <span className="education-years">
              <i className="fas fa-calendar-alt"></i> July, 2019 - November,
              2019
            </span>
          </div>
          <p className="institution">
            <i className="fas fa-building"></i> South Metropolitan TAFE
          </p>
          <div className="key-learnings">
            {/* Key learning bubbles */}
            <span className="learning-bubble">Game Design</span>
            <span className="learning-bubble">Unity</span>
            <span className="learning-bubble">C#</span>
            <span className="learning-bubble">3D Modelling</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
