import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div
            id="wd-people-table"
            style={{
                fontSize: "1.5rem",
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
            }}
        >
            <Table
                striped
                className="table-sm"
                style={{
                    margin: "0",
                }}
            >
                <thead>
                    <tr>
                        <th style={{ padding: "0.5rem" }}>Name</th>
                        <th style={{ padding: "0.5rem" }}>Login ID</th>
                        <th style={{ padding: "0.5rem" }}>Section</th>
                        <th style={{ padding: "0.5rem" }}>Role</th>
                        <th style={{ padding: "0.5rem" }}>Last Activity</th>
                        <th style={{ padding: "0.5rem" }}>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.5rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Sheldon</span>{" "}
                            <span className="wd-last-name">Cooper</span>
                        </td>
                        <td style={{ padding: "0.5rem" }}>001234561S</td>
                        <td style={{ padding: "0.5rem" }}>S101</td>
                        <td style={{ padding: "0.5rem" }}>STUDENT</td>
                        <td style={{ padding: "0.5rem" }}>2020-10-01</td>
                        <td style={{ padding: "0.5rem" }}>10:21:32</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.5rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Leonard</span>{" "}
                            <span className="wd-last-name">Hofstadter</span>
                        </td>
                        <td style={{ padding: "0.5rem" }}>001234562L</td>
                        <td style={{ padding: "0.5rem" }}>S102</td>
                        <td style={{ padding: "0.5rem" }}>STUDENT</td>
                        <td style={{ padding: "0.5rem" }}>2020-10-02</td>
                        <td style={{ padding: "0.5rem" }}>12:15:45</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.5rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Penny</span>{" "}
                            <span className="wd-last-name">Hofstadter</span>
                        </td>
                        <td style={{ padding: "0.5rem" }}>001234563P</td>
                        <td style={{ padding: "0.5rem" }}>S103</td>
                        <td style={{ padding: "0.5rem" }}>STUDENT</td>
                        <td style={{ padding: "0.5rem" }}>2020-10-03</td>
                        <td style={{ padding: "0.5rem" }}>15:30.5</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.5rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Rajesh</span>{" "}
                            <span className="wd-last-name">Koothrappali</span>
                        </td>
                        <td style={{ padding: "0.5rem" }}>001234564R</td>
                        <td style={{ padding: "0.5rem" }}>S104</td>
                        <td style={{ padding: "0.5rem" }}>STUDENT</td>
                        <td style={{ padding: "0.5rem" }}>2020-10-04</td>
                        <td style={{ padding: "0.5rem" }}>08:45:00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
