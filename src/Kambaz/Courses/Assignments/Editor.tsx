import { useParams } from 'react-router-dom';
import { Card, Form, Button, Table } from 'react-bootstrap';
import "../../styles.css";

const ASSIGNMENTS = {
    "123": {
        name: "A1 - ENV + HTML",
        description: "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section, links to each of the lab assignments, links to the Kambaz application, and links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.",
        points: 100,
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20"
    },
    "124": {
        name: "A2 - React",
        description: "Create a React application with components and routing.",
        points: 150,
        dueDate: "2024-05-27",
        availableFrom: "2024-05-20",
        availableUntil: "2024-06-03"
    },
    "125": {
        name: "A3 - Node",
        description: "Implement a Node.js backend with REST APIs.",
        points: 200,
        dueDate: "2024-06-10",
        availableFrom: "2024-06-03",
        availableUntil: "2024-06-17"
    }
};

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = ASSIGNMENTS[aid as keyof typeof ASSIGNMENTS] || ASSIGNMENTS["123"];

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group className="mb-4">
                    <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                    <Form.Control type="text" id="wd-name" defaultValue={assignment.name} />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor="wd-description">Assignment Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="wd-description"
                        rows={6}
                        defaultValue={assignment.description}
                    />
                </Form.Group>

                <Table borderless className="mb-4">
                    <tbody>
                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-points">Total Points</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="number" id="wd-points" defaultValue={assignment.points} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
                            </td>
                            <td>
                                <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                </Form.Select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
                            </td>
                            <td>
                                <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                                    <option value="Percentage">Percentage</option>
                                </Form.Select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
                            </td>
                            <td>
                                <Card className="mb-4 shadow-sm rounded">
                                    <Card.Body>
                                        <Form.Select id="wd-submission-type" defaultValue="Online">
                                            <option value="Online">Online</option>
                                        </Form.Select>
                                        <div className="mt-3">
                                            <Form.Label><b>Online Entry Options</b></Form.Label>
                                            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                                            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
                                            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                                            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                                            <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
                            </td>
                            <td>
                                <Card className="mb-4 shadow-sm rounded">
                                    <Card.Body>
                                        <Form.Select id="wd-assign-to" defaultValue="Everyone">
                                            <option value="Everyone">Everyone</option>
                                        </Form.Select>
                                        <Form.Group className="mt-3">
                                            <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="wd-due-date"
                                                defaultValue={assignment.dueDate}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        id="wd-available-from"
                                                        defaultValue={assignment.availableFrom}
                                                    />
                                                </div>
                                                <div className="ms-2">
                                                    <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        id="wd-available-until"
                                                        defaultValue={assignment.availableUntil}
                                                    />
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div className="text-end mt-4">
                    <Button variant="secondary" className="me-2">Cancel</Button>
                    <Button variant="primary">Save</Button>
                </div>
            </Form>
        </div>
    );
}
