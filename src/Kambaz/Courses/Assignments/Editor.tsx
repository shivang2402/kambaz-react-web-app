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
// }
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // Fixed import for react-router-dom
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

  return (
    <Container id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title || ""} readOnly />
        </Form.Group>

        <br />

        <Form.Group controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            defaultValue={assignment?.description || ""}
            rows={4}
            readOnly
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
                type="number"
                defaultValue={assignment?.points || 0}
                readOnly
              />
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-group">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Select defaultValue="assignment" disabled>
                <option value="assignment">ASSIGNMENTS</option>
                <option value="quiz">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="project">PROJECT</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-display-grade-as">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Display Grade As</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Select defaultValue="percentage" disabled>
                <option value="percentage">Percentage</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-submission-type">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Submission Type</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Select defaultValue="online" disabled>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Form.Select>

              <div className="mt-3">
                <h5>Online Entry Options</h5>
                <Form.Check type="checkbox" label="Text Entry" disabled />
                <Form.Check type="checkbox" label="Website URL" disabled />
                <Form.Check type="checkbox" label="Media Recordings" disabled />
                <Form.Check type="checkbox" label="Student Annotation" disabled />
                <Form.Check type="checkbox" label="File Uploads" disabled />
              </div>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-assign-to">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Assign</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Label>Assign To</Form.Label>
              <Form.Control type="text" defaultValue="Everyone" readOnly />

              <br />

              <Form.Group controlId="wd-due-date">
                <Form.Label>Due</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={assignment?.dueDate || "2025-01-02"}
                  readOnly
                />
              </Form.Group>

              <br />

              <Row>
                <Col md={6}>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label>Available from</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={assignment?.availableFrom || "2025-01-01"}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label>Until</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={assignment?.availableUntil || "2025-01-10"}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
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
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-danger text-white"
          >
            Save
          </Link>
        </Container>
      </Form>
    </Container>
  );
}
