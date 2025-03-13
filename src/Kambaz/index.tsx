// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./styles.css";

// export default function Kambaz() {
//   return (
//     <div id="wd-kambaz">
//       {/* <table> */}
//         {/* <tr> */}
//           {/* <td valign="top"> */}
//             <KambazNavigation />
//           {/* </td> */}
//           {/* // <td valign="top"> */}
//                 <div>
//                 <div className="wd-main-content-offset p-3">

//             <Routes>
//               <Route path="/" element={<Navigate to="Dashboard" />} />
//               <Route path="/Account/*" element={<Account />} />
//               <Route path="/Dashboard" element={<Dashboard />} />
//               <Route path="/Courses/:cid/*" element={<Courses />} />
//               <Route path="/Calendar" element={<h1>Calendar</h1>} />
//               <Route path="/Inbox" element={<h1>Inbox</h1>} />

//             </Routes>
//             </div>

//             </div>
//           {/* </td> */}
//         {/* // </tr> */}
//       {/* // </table> */}
//     </div>
// );}


import KambazNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import React from "react";


export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: uuidv4() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                {React.createElement(Dashboard as React.ElementType, {
                  courses,
                  course,
                  setCourse,
                  addNewCourse,
                  deleteCourse,
                  updateCourse,
                })}
              </ProtectedRoute>
            }
          />
<Route
  path="/Courses/:cid/*"
  element={
    <ProtectedRoute>
      {React.createElement(Courses as React.ElementType, { courses })}
    </ProtectedRoute>
  }
/>
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />


        </Routes>
      </div>
    </div>);
}

