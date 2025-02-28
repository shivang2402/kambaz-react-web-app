// import { Link } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import Nav from "react-bootstrap/Nav";export default function KambazNavigation() {
//   return (
    
//     <div
//       id="wd-kambaz-navigation"
//       style={{ width: 110 }}
//       className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//     >
//       <a
//         id="wd-neu-link"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//         className="list-group-item bg-black border-0 text-center"
//       >
//         <img src="/images/NEU.png" width="65px" alt="NEU Logo" />
//       </a>

//       <Nav variant="pills" className="flex-column">
//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Kambaz/Account"
//             id="wd-account-link"
//             className="list-group-item text-center border-0 bg-black text-white"
//           >
//             <FaRegCircleUser className="fs-1 text-white" />
//             <br />
//             Account
//           </Nav.Link>
//         </Nav.Item>

//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Kambaz/Dashboard"
//             id="wd-dashboard-link"
//             className="list-group-item text-center border-0 bg-white text-danger"
//           >
//             <AiOutlineDashboard className="fs-1 text-danger" />
//             <br />
//             Dashboard
//           </Nav.Link>
//         </Nav.Item>

//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Kambaz/Dashboard"
//             id="wd-course-link"
//             className="list-group-item text-center border-0 bg-black text-white"
//           >
//             <LiaBookSolid className="fs-1 text-danger" />
//             <br />
//             Courses
//           </Nav.Link>
//         </Nav.Item>

//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Kambaz/Calendar"
//             id="wd-calendar-link"
//             className="list-group-item text-center border-0 bg-black text-white"
//           >
//             <IoCalendarOutline className="fs-1 text-danger" />
//             <br />
//             Calendar
//           </Nav.Link>
//         </Nav.Item>

//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Kambaz/Inbox"
//             id="wd-inbox-link"
//             className="list-group-item text-center border-0 bg-black text-white"
//           >
//             <FaInbox className="fs-1 text-danger" />
//             <br />
//             Inbox
//           </Nav.Link>
//         </Nav.Item>

//         <Nav.Item className="mb-2">
//           <Nav.Link
//             as={Link}
//             to="/Labs"
//             id="wd-settings-link"
//             className="list-group-item text-center border-0 bg-black text-white"
//           >
//             <LiaCogSolid className="fs-1 text-danger" />
//             <br />
//             Labs
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </div>
  
// );}
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <ListGroup id="wd-kambaz-navigation" style={{width: 120}}
         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        action className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
);}

