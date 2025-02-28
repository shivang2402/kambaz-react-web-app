// import { BsGripVertical } from "react-icons/bs";
// import { GoTriangleDown } from "react-icons/go";
// import { MdOutlineEditNote } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa6";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import "../../styles.css";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments" className="assignments-container p-3">
//       {/* Search Bar and Buttons */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div className="search-container d-flex align-items-center border p-2 rounded">
//           <CiSearch className="search-icon me-2" />
//           <input
//             type="text"
//             id="wd-search-assignment"
//             className="border-0"
//             placeholder="Search for Assignments"
//           />
//         </div>

//         <div>
//           <button className="btn btn-light border me-2">
//             <FaPlus className="me-2" /> Group
//           </button>
//           <button className="btn btn-danger">
//             <FaPlus className="me-2" /> Assignment
//           </button>
//         </div>
//       </div>

//       {/* Assignments Header */}
//       <h3 className="d-flex justify-content-between align-items-center border-bottom pb-2">
//         <span>
//           <GoTriangleDown /> <b>ASSIGNMENTS</b>
//         </span>
//         <span className="bg-light rounded-pill px-3 py-1">40% of Total</span>
//         <button className="btn btn-light border">
//           <FaPlus />
//         </button>
//       </h3>

//       {/* Assignments List */}
//       <ul className="list-group mt-3">
//         {[
//           { id: 123, title: "A1 - ENV + HTML", available: "May 6", due: "May 13" },
//           { id: 124, title: "A2 - CSS", available: "May 13", due: "May 20" },
//           { id: 125, title: "A3 - JAVASCRIPT + REACT", available: "May 20", due: "May 27" }
//         ].map(({ id, title, available, due }) => (
//           <li key={id} className="list-group-item d-flex justify-content-between align-items-center py-3">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="text-secondary me-2" />
//               <MdOutlineEditNote className="text-success fs-4 me-3" />
//             </div>
//             <div className="flex-grow-1">
//               <a href={`#/Kambaz/Courses/1234/Assignments/${id}`} className="fw-bold text-dark text-decoration-none">
//                 {title}
//               </a>
//               <div className="text-muted small">
//                 <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {available} at 12:00 AM
//               </div>
//               <div className="text-muted small">
//                 <b>Due</b> {due} at 11:59 PM | 100 points
//               </div>
//             </div>
//             <AssignmentControlButtons />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database";

type Assignment = {
  _id: string;
  title: string;
  course: string;
};

function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const { cid } = useParams();
  return (
    <Link
      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
      className="wd-assignment-link"
      style={{ textDecoration: "none" }}
    >
      <ListGroup
        key={assignment._id}
        className="wd-assignment-list-item rounded-0"
      >
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <div className="assignment-details">
              <div className="assignment-title">{assignment.title}</div>
              
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Link>
  );
}

export default function Assignments() {
  const { cid } = useParams();

  const courseAssignments: Assignment[] = assignments.filter(
    (assignment: any) => assignment.course == cid
  );

  return (
    <div id="wd-assignments">
      <div className="wd-search-container d-flex align-items-center mb-3">
        <div className="position-relative">
          <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search..."
          />
        </div>

        <div className="ms-auto d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-light border me-2 d-inline-flex align-items-center px-3 py-2"
          >
            <span className="me-1">+</span> Group
          </button>

          <button
            id="wd-add-assignment"
            className="btn btn-danger text-white d-inline-flex align-items-center px-3 py-2"
          >
            <span className="me-1">+</span> Assignment
          </button>
        </div>
      </div>
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments
            <ModuleControlButtons />
          </div>
          {courseAssignments.map((assignment: any) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}