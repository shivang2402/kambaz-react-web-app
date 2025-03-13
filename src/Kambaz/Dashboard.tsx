import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, updateCourse, deleteCourse } from "./Courses/actions";
import { enrollCourse, unenrollCourse } from "./Enrollments/actions";
import { Course } from "./Courses/types";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const courses: Course[] = useSelector((state: any) => state.courseReducer.courses);
  const enrolledCourses = useSelector((state: any) => state.enrollmentReducer?.enrolledCourses ?? []);

  const isFaculty = currentUser?.role === "FACULTY";

  const [course, setCourse] = useState<Course>({
    id: "0",
    title: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    image: "",
    description: "",
    instructor: "",
  });

  const handleAddNewCourse = () => {
    dispatch(
      addCourse({
        ...course,
        id: Date.now().toString(),
        image: course.image || "/images/reactjs.jpg",
      })
    );
    resetForm();
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
    resetForm();
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse(courseId));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse(courseId));
  };

  const resetForm = () => {
    setCourse({
      id: "0",
      title: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      image: "",
      description: "",
      instructor: "",
    });
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* New/Edit Course Form - Visible only for Faculty */}
      {isFaculty && (
        <>
          <h5>
            {course.id === "0" ? "New Course" : "Edit Course"}
            <Button className="btn btn-primary float-end btn-sm" onClick={handleAddNewCourse}>
              Add
            </Button>
            <Button className="btn btn-warning float-end me-2 btn-sm" onClick={handleUpdateCourse}>
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
          {courses.map((course) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src={String(course.image) || "/images/reactjs.jpg"}
                    variant="top"
                    width="100%"
                    height={160}
                  />

                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>

                    {enrolledCourses.includes(course.id) ? (
                      <Button variant="danger btn-sm" onClick={() => handleUnenroll(course.id)}>
                        Unenroll
                      </Button>
                    ) : (
                      <Button variant="success btn-sm" onClick={() => handleEnroll(course.id)}>
                        Enroll
                      </Button>
                    )}
                  </Card.Body>
                </Link>

                {/* Faculty Controls: Edit and Delete */}
                {isFaculty && (
                  <div className="mt-2 p-2">
                    <Button
                      variant="warning"
                      className="me-2 float-end btn-sm"
                      onClick={() => setCourse(course)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="float-end btn-sm"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
