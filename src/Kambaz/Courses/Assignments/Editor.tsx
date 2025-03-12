// import { useParams } from 'react-router-dom';
// import { Card, Form, Button, Table } from 'react-bootstrap';
// import "../../styles.css";

// const ASSIGNMENTS = {
//     "123": {
//         name: "A1 - ENV + HTML",
//         description: "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section, links to each of the lab assignments, links to the Kambaz application, and links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.",
//         points: 100,
//         dueDate: "2024-05-13",
//         availableFrom: "2024-05-06",
//         availableUntil: "2024-05-20"
//     },
//     "124": {
//         name: "A2 - React",
//         description: "Create a React application with components and routing.",
//         points: 150,
//         dueDate: "2024-05-27",
//         availableFrom: "2024-05-20",
//         availableUntil: "2024-06-03"
//     },
//     "125": {
//         name: "A3 - Node",
//         description: "Implement a Node.js backend with REST APIs.",
//         points: 200,
//         dueDate: "2024-06-10",
//         availableFrom: "2024-06-03",
//         availableUntil: "2024-06-17"
//     }
// };

// export default function AssignmentEditor() {
//     const { aid } = useParams();
//     const assignment = ASSIGNMENTS[aid as keyof typeof ASSIGNMENTS] || ASSIGNMENTS["123"];

//     return (
//         <div id="wd-assignments-editor" className="p-4">
//             <Form>
//                 <Form.Group className="mb-4">
//                     <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
//                     <Form.Control type="text" id="wd-name" defaultValue={assignment.name} />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                     <Form.Label htmlFor="wd-description">Assignment Description</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         id="wd-description"
//                         rows={6}
//                         defaultValue={assignment.description}
//                     />
//                 </Form.Group>

//                 <Table borderless className="mb-4">
//                     <tbody>
//                         <tr>
//                             <td className="text-end align-top">
//                                 <Form.Label htmlFor="wd-points">Total Points</Form.Label>
//                             </td>
//                             <td>
//                                 <Form.Control type="number" id="wd-points" defaultValue={assignment.points} />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td className="text-end align-top">
//                                 <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//                             </td>
//                             <td>
//                                 <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
//                                     <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                                 </Form.Select>
//                             </td>
//                         </tr>

//                         <tr>
//                             <td className="text-end align-top">
//                                 <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
//                             </td>
//                             <td>
//                                 <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
//                                     <option value="Percentage">Percentage</option>
//                                 </Form.Select>
//                             </td>
//                         </tr>

//                         <tr>
//                             <td className="text-end align-top">
//                                 <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
//                             </td>
//                             <td>
//                                 <Card className="mb-4 shadow-sm rounded">
//                                     <Card.Body>
//                                         <Form.Select id="wd-submission-type" defaultValue="Online">
//                                             <option value="Online">Online</option>
//                                         </Form.Select>
//                                         <div className="mt-3">
//                                             <Form.Label><b>Online Entry Options</b></Form.Label>
//                                             <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
//                                             <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
//                                             <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
//                                             <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
//                                             <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </td>
//                         </tr>

//                         <tr>
//                             <td className="text-end align-top">
//                                 <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
//                             </td>
//                             <td>
//                                 <Card className="mb-4 shadow-sm rounded">
//                                     <Card.Body>
//                                         <Form.Select id="wd-assign-to" defaultValue="Everyone">
//                                             <option value="Everyone">Everyone</option>
//                                         </Form.Select>
//                                         <Form.Group className="mt-3">
//                                             <Form.Label htmlFor="wd-due-date">Due</Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 id="wd-due-date"
//                                                 defaultValue={assignment.dueDate}
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mt-3">
//                                             <div className="d-flex">
//                                                 <div className="me-2">
//                                                     <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
//                                                     <Form.Control
//                                                         type="date"
//                                                         id="wd-available-from"
//                                                         defaultValue={assignment.availableFrom}
//                                                     />
//                                                 </div>
//                                                 <div className="ms-2">
//                                                     <Form.Label htmlFor="wd-available-until">Until</Form.Label>
//                                                     <Form.Control
//                                                         type="date"
//                                                         id="wd-available-until"
//                                                         defaultValue={assignment.availableUntil}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </Form.Group>
//                                     </Card.Body>
//                                 </Card>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </Table>

//                 <div className="text-end mt-4">
//                     <Button variant="secondary" className="me-2">Cancel</Button>
//                     <Button variant="primary">Save</Button>
//                 </div>
//             </Form>
//         </div>
//     );
// }import { Col, Container, Form, Row } from "react-bootstrap";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addAssignment, updateAssignment } from "./reducer";
// import { v4 as uuidv4 } from "uuid";

// export default function AssignmentEditor() {
//   const { aid, cid } = useParams<{ aid?: string; cid?: string }>();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Find existing assignment or initialize a new one
//   const existingAssignment = assignments.find((a: any) => a._id === aid);
//   const isEditing = Boolean(aid && existingAssignment);

//   const [assignment, setAssignment] = useState(
//     existingAssignment || {
//       _id: uuidv4(), // Ensure a new ID is generated for new assignments
//       title: "",
//       description: "",
//       points: 0,
//       due_date: "",
//       available_date: "",
//       course: cid || "",
//     }
//   );

//   // Redirect if editing an assignment that does not exist
//   useEffect(() => {
//     if (aid && !existingAssignment) {
//       navigate(`/Kambaz/Courses/${cid}/Assignments`);
//     }
//   }, [aid, existingAssignment, navigate, cid]);

//   const handleSaveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault(); // Prevents page refresh

//     if (!assignment.title.trim()) {
//       alert("Assignment title is required.");
//       return;
//     }

//     if (isEditing) {
//       dispatch(updateAssignment(assignment));
//     } else {
//       dispatch(addAssignment(assignment));
//     }

//     navigate(`/Kambaz/Courses/${cid}/Assignments`);
//   };

//   return (
//     <Container id="wd-assignments-editor">
//       <Form>
//         <Form.Group controlId="wd-name">
//           <Form.Label>Assignment Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={assignment.title}
//             onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
//           />
//         </Form.Group>

//         <br />

//         <Form.Group controlId="wd-description">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             value={assignment.description}
//             onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
//             rows={4}
//           />
//         </Form.Group>

//         <br />

//         <Form.Group controlId="wd-points">
//           <Row>
//             <Col md={6} className="d-flex justify-content-end">
//               <Form.Label>Points</Form.Label>
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="number"
//                 value={assignment.points}
//                 onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
//               />
//             </Col>
//           </Row>
//         </Form.Group>

//         <br />

//         <Form.Group controlId="wd-available-from">
//           <Row>
//             <Col md={6} className="d-flex justify-content-end">
//               <Form.Label>Available from</Form.Label>
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="date"
//                 value={assignment.available_date}
//                 onChange={(e) => setAssignment({ ...assignment, available_date: e.target.value })}
//               />
//             </Col>
//           </Row>
//         </Form.Group>

//         <br />

//         <Form.Group controlId="wd-available-until">
//           <Row>
//             <Col md={6} className="d-flex justify-content-end">
//               <Form.Label>Available until</Form.Label>
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="date"
//                 value={assignment.due_date}
//                 onChange={(e) => setAssignment({ ...assignment, due_date: e.target.value })}
//               />
//             </Col>
//           </Row>
//         </Form.Group>

//         <br />
//         <hr />

//         <Container className="d-flex justify-content-end">
//           <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary text-dark me-2">
//             Cancel
//           </Link>
//           <button type="button" className="btn btn-danger text-white" onClick={handleSaveClick}>
//             Save
//           </button>
//         </Container>
//       </Form>
//     </Container>
//   );
// }


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { addAssignment } from "./reducer";

// const AssignmentEditor = () => {
//   const { cid } = useParams<{ cid?: string }>();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [points, setPoints] = useState(0);
//   const [dueDate, setDueDate] = useState("");
//   const [availableDate, setAvailableDate] = useState("");

//   const handleSave = () => {
//     if (!title || !dueDate || !points) {
//       alert("Please fill in required fields!");
//       return;
//     }

//     const newAssignment = {
//       title,
//       course: cid,
//       description,
//       points,
//       due_date: dueDate,
//       available_date: availableDate,
//     };

//     dispatch(addAssignment(newAssignment));
//     navigate(`/Kambaz/Courses/${cid}/Assignments`);
//   };

//   return (
//     <div className="container">
//       <h2>Create Assignment</h2>
//       <div className="mb-3">
//         <label className="form-label">Title</label>
//         <input
//           type="text"
//           className="form-control"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Description</label>
//         <textarea
//           className="form-control"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Points</label>
//         <input
//           type="number"
//           className="form-control"
//           value={points}
//           onChange={(e) => setPoints(Number(e.target.value))}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Due Date</label>
//         <input
//           type="date"
//           className="form-control"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Available Date</label>
//         <input
//           type="date"
//           className="form-control"
//           value={availableDate}
//           onChange={(e) => setAvailableDate(e.target.value)}
//         />
//       </div>

//       <button className="btn btn-success me-2" onClick={handleSave}>
//         Save
//       </button>
//       <button
//         className="btn btn-secondary"
//         onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default AssignmentEditor;


import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router";
import { useRef, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  const isEditingRef = useRef(!!existingAssignment);

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      _id: uuidv4(), // Generate a new ID if creating a new assignment
      title: "",
      description: "",
      points: 0,
      due_date: "",
      available_date: "",
      course: cid,
    }
  );

  const handleSaveClick = () => {
    if (!assignment.title.trim() || !assignment.due_date.trim() || assignment.points <= 0) {
      alert("Please fill in all required fields!");
      return;
    }

    if (isEditingRef.current) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        <br />
        <Form.Group controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            id="wd-description"
            as="textarea"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            rows={4}
          />
        </Form.Group>

        <br />
        <Form.Group controlId="wd-points">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Points</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
              />
            </Col>
          </Row>
        </Form.Group>

        <br />
        <Form.Group controlId="wd-due-date">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Due Date</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                id="wd-due-date"
                type="date"
                value={assignment.due_date}
                onChange={(e) => setAssignment({ ...assignment, due_date: e.target.value })}
              />
            </Col>
          </Row>
        </Form.Group>

        <br />
        <Form.Group controlId="wd-available-from">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Available From</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                id="wd-available-from"
                type="date"
                value={assignment.available_date}
                onChange={(e) => setAssignment({ ...assignment, available_date: e.target.value })}
              />
            </Col>
          </Row>
        </Form.Group>

        <br />
        <hr />

        <Container className="d-flex justify-content-end">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-secondary text-dark me-2"
          >
            Cancel
          </Link>
          <button onClick={handleSaveClick} className="btn btn-danger text-white">
            Save
          </button>
        </Container>
      </Form>
    </Container>
  );
}
