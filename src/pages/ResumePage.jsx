import "./stylesheet/resume.css";
export default function ResumePage() {
  return (
    <div className="resume-page">
      <h1>Resume Page</h1>
      <p>Programming language: Javascript and Node.js</p>
      <p>Frontend: HTML+CSS+Javascript, express-handlebar, React</p>
      <p>Backend: express server (RESTful structure or Apollo)</p>
      <p>Database: MongoDB, sequelize and mysql</p>
      <div id="download-container">
        <a href="/assets/PDF/Yilun+Fan+CV+2023.pdf" download>
          <h2>Download My Resume</h2>
        </a>
        <img id="download-icon" src="/assets/images/download.png"></img>
      </div>
    </div>
  );
}
