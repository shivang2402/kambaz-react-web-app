// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";

// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;

//   return (
//     <div>
//       {/* Button Controls
//       <div className="wd-buttons">
//         <button>Collapse All</button>
//         <button>View Progress</button>
//         <button>Publish All</button>
//         <button>+ Module</button>
//       </div> */}

//       <ModulesControls />
//       <br />
//       <br />
//       <br />

//       <ListGroup className="rounded-0" id="wd-modules">
//         {/* Week 1 Module */}
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 1
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
//               <LessonControlButtons />
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Introduction to the course
//               <LessonControlButtons />
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>

//         {/* Week 2 Module */}
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 2
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Lesson 1: Web Development Basics
//               <LessonControlButtons />
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Lesson 2: HTML and CSS Fundamentals
//               <LessonControlButtons />
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>

//         {/* Week 3 Module */}
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 3
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Lesson 1: JavaScript Basics
//               <LessonControlButtons />
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Lesson 2: Functions in JavaScript
//               <LessonControlButtons />
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }
import { useParams } from "react-router";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module: any) => module.course === cid);

  if (modules.length === 0) {
    return <p className="text-muted">No modules available for this course.</p>;
  }

  return (
    <div>
      <ModulesControls />
      <br />
      <ListGroup id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <ModuleItem key={module.id} module={module} />
        ))}
      </ListGroup>
    </div>
  );
}

function ModuleItem({ module }: { module: any }) {
  return (
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> {module.name}
        <ModuleControlButtons />
      </div>
      {module.lessons && (
        <ListGroup className="wd-lessons list-group rounded-0">
          {module.lessons.map((lesson: any) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))}
        </ListGroup>
      )}
    </ListGroup.Item>
  );
}

function LessonItem({ lesson }: { lesson: any }) {
  return (
    <ListGroup.Item className="wd-lesson p-3 ps-1">
      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
      <LessonControlButtons />
    </ListGroup.Item>
  );
}
