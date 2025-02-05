import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function AccountNavigation() {
  return (
    <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <ListGroup.Item className="p-0 border-0">
        <NavLink
          to="/Kambaz/Account/Signin"
          className={({ isActive }) =>
            `btn btn-link w-100 text-start list-group-item border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`
          }
        >
          Signin
        </NavLink>
      </ListGroup.Item>

      <ListGroup.Item className="p-0 border-0">
        <NavLink
          to="/Kambaz/Account/Signup"
          className={({ isActive }) =>
            `btn btn-link w-100 text-start list-group-item border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`
          }
        >
          Signup
        </NavLink>
      </ListGroup.Item>

      <ListGroup.Item className="p-0 border-0">
        <NavLink
          to="/Kambaz/Account/Profile"
          className={({ isActive }) =>
            `btn btn-link w-100 text-start list-group-item border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`
          }
        >
          Profile
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
}
