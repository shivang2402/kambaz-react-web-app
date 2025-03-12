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




// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid"; // Import UUID
// import * as db from "./Database";
// import { Button, Card, Col, Row, Form } from "react-bootstrap";

// export default function Dashboard() {
//   const [courses, setCourses] = useState<any[]>(db.courses);
//   const [course, setCourse] = useState<any>({
//     _id: "0",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     image: "/images/reactjs.jpg",
//     description: "New Description",
//   });

//   // Add New Course
//   const addNewCourse = () => {
//     const newCourse = { ...course, _id: uuidv4() };
//     setCourses([...courses, newCourse]);
//   };

//   // Delete Course
//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   // Edit Course - Copies selected course into form
//   const editCourse = (selectedCourse: any) => {
//     setCourse(selectedCourse);
//   };

//   // Update Course - Updates existing course in list
//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => (c._id === course._id ? course : c))
//     );
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {/* New/Edit Course Form */}
//       <h5>
//         {course._id === "0" ? "New Course" : "Edit Course"}
//         <Button className="btn btn-primary float-end" onClick={addNewCourse} id="wd-add-new-course-click">
//           Add
//         </Button>
//         <Button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
//           Update
//         </Button>
//       </h5>
//       <Form>
//         <Form.Group className="mb-2">
//           <Form.Label>Course Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.name}
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Course Number</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.number}
//             onChange={(e) => setCourse({ ...course, number: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Start Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={course.startDate}
//             onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>End Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={course.endDate}
//             onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Image URL</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.image}
//             onChange={(e) => setCourse({ ...course, image: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={course.description}
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </Form.Group>
//       </Form>
//       <hr />

//       {/* Published Courses */}
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses.map((course) => (
//             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//               <Card>
//                 <Link
//                   to={`/Kambaz/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                 >
//                   <Card.Img
//                     src={course.image || "/images/reactjs.jpg"}
//                     variant="top"
//                     width="100%"
//                     height={160}
//                   />
//                   <Card.Body className="card-body">
//                     <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                       {course.name}
//                     </Card.Title>
//                     <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                       {course.description}
//                     </Card.Text>
//                     <Button variant="primary">Go</Button>
//                   </Card.Body>
//                 </Link>

//                 {/* Edit Button */}
//                 <Button
//                   variant="warning"
//                   className="me-2 float-end btn-sm"
//                   id="wd-edit-course-click"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     editCourse(course);
//                   }}
//                 >
//                   Edit
//                 </Button>

//                 {/* Delete Button */}
//                 <Button
//                   variant="danger"
//                   className="float-end btn-sm"
//                   id="wd-delete-course-click"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     deleteCourse(course._id);
//                   }}
//                 >
//                   Delete
//                 </Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }



// import { Link } from "react-router-dom";
// import { Button, Card, Col, Row, Form } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import * as db from "./Database";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {/* New/Edit Course Form */}
//       <h5>
//         {course._id === "0" ? "New Course" : "Edit Course"}
//         <Button className="btn btn-primary float-end btn-sm" onClick={addNewCourse} id="wd-add-new-course-click">
//           Add
//         </Button>
//         <Button className="btn btn-warning float-end me-2 btn-sm" onClick={updateCourse} id="wd-update-course-click">
//           Update
//         </Button>
//       </h5>
//       <Form>
//         <Form.Group className="mb-2">
//           <Form.Label>Course Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.name}
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Course Number</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.number}
//             onChange={(e) => setCourse({ ...course, number: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Start Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={course.startDate}
//             onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>End Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={course.endDate}
//             onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Image URL</Form.Label>
//           <Form.Control
//             type="text"
//             value={course.image}
//             onChange={(e) => setCourse({ ...course, image: e.target.value })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={course.description}
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </Form.Group>
//       </Form>
//       <hr />

//       {/* Published Courses */}
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses
//             .filter((course) =>
//               enrollments.some(
//                 (enrollment) =>
//                   enrollment.user === currentUser._id &&
//                   enrollment.course === course._id
//               ))

//             .map((course) => (
//               <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//                 <Card>
//                   <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
//                     <Card.Img src={course.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
//                     <Card.Body className="card-body">
//                       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
//                       <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
//                       <Button variant="primary btn-sm">Go</Button>
//                     </Card.Body>
//                   </Link>

//                   {/* Small Edit Button */}
//                   <Button
//                     variant="warning"
//                     className="me-2 float-end btn-sm"
//                     id="wd-edit-course-click"
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setCourse(course);
//                     }}
//                   >
//                     Edit
//                   </Button>

//                   {/* Small Delete Button */}
//                   <Button
//                     variant="danger"
//                     className="float-end btn-sm"
//                     id="wd-delete-course-click"
//                     onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </Card>
//               </Col>
//             ))}
//         </Row>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as db from "./Database";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* New/Edit Course Form - Visible only for Faculty */}
      {isFaculty && (
        <>
          <h5>
            {course._id === "0" ? "New Course" : "Edit Course"}
            <Button className="btn btn-primary float-end btn-sm" onClick={addNewCourse} id="wd-add-new-course-click">
              Add
            </Button>
            <Button className="btn btn-warning float-end me-2 btn-sm" onClick={updateCourse} id="wd-update-course-click">
              Update
            </Button>
          </h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Course Number</Form.Label>
              <Form.Control
                type="text"
                value={course.number}
                onChange={(e) => setCourse({ ...course, number: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={course.startDate}
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={course.endDate}
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={course.image}
                onChange={(e) => setCourse({ ...course, image: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
              />
            </Form.Group>
          </Form>
          <hr />
        </>
      )}

      {/* Published Courses */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course: { _id: string; }) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            .map((course: { _id: Key | null | undefined; image: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img src={course.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
                      <Button variant="primary btn-sm">Go</Button>
                    </Card.Body>
                  </Link>

                  {/* Small Edit & Delete Buttons - Visible only for Faculty */}
                  {isFaculty && (
                    <>
                      <Button
                        variant="warning"
                        className="me-2 float-end btn-sm"
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="float-end btn-sm"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          if (course._id) {
                            deleteCourse(String(course._id)); // Ensure it's a string
                          } else {
                            console.error("Error: course._id is undefined or null");
                          }
                        }}
                      >
                        Delete
                      </Button>

                    </>
                  )}
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
