import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" alt="React JS" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" alt="Node.js" width={200} />
            <div>
              <h5>CS5678 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development Specialist</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/9101/Home" className="wd-dashboard-course-link">
            <img src="/images/python.jpg" alt="Python" width={200} />
            <div>
              <h5>CS9101 Python</h5>
              <p className="wd-dashboard-course-title">Data Science and Machine Learning</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link">
            <img src="/images/angular.jpg" alt="Angular" width={200} />
            <div>
              <h5>CS1122 Angular</h5>
              <p className="wd-dashboard-course-title">Frontend Framework Specialist</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3344/Home" className="wd-dashboard-course-link">
            <img src="/images/java.jpg" alt="Java" width={200} />
            <div>
              <h5>CS3344 Java</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming Expert</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/9921/Home" className="wd-dashboard-course-link">
            <img src="/images/sql.jpg" alt="SQL" width={200} />
            <div>
              <h5>CS9921 SQL</h5>
              <p className="wd-dashboard-course-title">Database Management and Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7780/Home" className="wd-dashboard-course-link">
            <img src="/images/flutter.jpg" alt="Flutter" width={200} />
            <div>
              <h5>CS7780 Flutter</h5>
              <p className="wd-dashboard-course-title">Cross-Platform Mobile Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
