import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";export default function KambazNavigation() {
  return (
    
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="65px" alt="NEU Logo" />
      </a>

      <Nav variant="pills" className="flex-column">
        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Kambaz/Account"
            id="wd-account-link"
            className="list-group-item text-center border-0 bg-black text-white"
          >
            <FaRegCircleUser className="fs-1 text-white" />
            <br />
            Account
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Kambaz/Dashboard"
            id="wd-dashboard-link"
            className="list-group-item text-center border-0 bg-white text-danger"
          >
            <AiOutlineDashboard className="fs-1 text-danger" />
            <br />
            Dashboard
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Kambaz/Dashboard"
            id="wd-course-link"
            className="list-group-item text-center border-0 bg-black text-white"
          >
            <LiaBookSolid className="fs-1 text-danger" />
            <br />
            Courses
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Kambaz/Calendar"
            id="wd-calendar-link"
            className="list-group-item text-center border-0 bg-black text-white"
          >
            <IoCalendarOutline className="fs-1 text-danger" />
            <br />
            Calendar
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Kambaz/Inbox"
            id="wd-inbox-link"
            className="list-group-item text-center border-0 bg-black text-white"
          >
            <FaInbox className="fs-1 text-danger" />
            <br />
            Inbox
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-2">
          <Nav.Link
            as={Link}
            to="/Labs"
            id="wd-settings-link"
            className="list-group-item text-center border-0 bg-black text-white"
          >
            <LiaCogSolid className="fs-1 text-danger" />
            <br />
            Labs
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  
);}
