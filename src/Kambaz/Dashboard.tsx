// import { Link } from "react-router-dom";
// import { Row, Col, Card, Button } from "react-bootstrap"; // Make sure you have react-bootstrap installed
// import "./styles.css"

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Full Stack Software Developer</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>
          
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS5678 Node.js</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Backend Development Specialist</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/9101/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS9101 Python</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Data Science and Machine Learning</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS1122 Angular</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Frontend Framework Specialist</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/3344/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS3344 Java</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Object-Oriented Programming Expert</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/9921/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/sql.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS9921 SQL</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Database Management and Design</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/7780/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/flutter.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS7780 Flutter</Card.Title>
//                   <Card.Text className="wd-dashboard-course-description">Cross-Platform Mobile Development</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import * as db from "./Database";
import { Button, Card, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}