// import { ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function CourseNavigation() {
//   return (
//     <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <ListGroup.Item className="p-0 border-0 active">
//         <Link
//           to="/Kambaz/Courses/1234/Home"
//           id="wd-course-home-link"
//           className="btn btn-link w-100 text-start list-group-item border-0"
//         >
//           Home
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/1234/Modules"
//           id="wd-course-modules-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           Modules
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/1234/Piazza"
//           id="wd-course-piazza-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           Piazza
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/1234/Zoom"
//           id="wd-course-zoom-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           Zoom
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/1234/Assignments"
//           id="wd-course-assignments-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           Assignments
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/1234/Quizzes"
//           id="wd-course-quizzes-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           Quizzes
//         </Link>
//       </ListGroup.Item>
//       <ListGroup.Item className="p-0 border-0">
//         <Link
//           to="/Kambaz/Courses/:cid/People"
//           id="wd-course-people-link"
//           className="btn btn-link w-100 text-start text-danger list-group-item border-0"
//         >
//           People
//         </Link>
//       </ListGroup.Item>
//     </ListGroup>
//   );
// }

import { ListGroup } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams(); // Retrieve course ID from the URL
  const location = useLocation(); // Get current pathname

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;

        return (
          <ListGroup.Item key={link} className={`p-0 border-0 ${isActive ? "active" : ""}`}>
            <Link
              to={path}
              id={`wd-course-${link.toLowerCase()}-link`}
              className={`btn btn-link w-100 text-start list-group-item border-0 ${isActive ? "text-black" : "text-danger"}`}
            >
              {link}
            </Link>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
