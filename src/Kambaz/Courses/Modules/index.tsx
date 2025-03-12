// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { useParams } from "react-router";
// import { useState } from "react";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import { useSelector, useDispatch } from "react-redux";

// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const modules = useSelector((state: any) => state.modulesReducer.modules);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <ModulesControls
//         setModuleName={setModuleName}
//         moduleName={moduleName}
//         addModule={() => {
//           dispatch(addModule({ name: moduleName, course: cid }));
//           setModuleName("");
//         }}
//       />
//       <br />
//       <br />
//       <br />

//       {modules
//         .filter((module: any) => module.course === cid)
//         .map((module: any) => (
//           <ListGroup key={module._id} className="rounded-0 mb-5" id="wd-modules">
//             <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" /> 
//                 {!module.editing ? (
//                   module.name
//                 ) : (
//                   <input
//                     className="form-control w-50 d-inline-block"
//                     onChange={(e) =>
//                       dispatch(updateModule({ ...module, name: e.target.value }))
//                     }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         dispatch(updateModule({ ...module, editing: false }));
//                       }
//                     }}
//                     defaultValue={module.name}
//                   />
//                 )}
//                 <ModuleControlButtons
//                   moduleId={module._id}
//                   deleteModule={() => dispatch(deleteModule(module._id))}
//                   editModule={() => dispatch(editModule(module._id))}
//                 />
//               </div>
//             </ListGroup.Item>
//             {module.lessons?.map((lesson: any) => (
//               <ListGroup key={lesson._id} className="wd-lessons rounded-0">
//                 <ListGroup.Item className="wd-lesson p-3 ps-1">
//                   <BsGripVertical className="me-2 fs-3" /> {lesson.name}
//                   <LessonControlButtons />
//                 </ListGroup.Item>
//               </ListGroup>
//             ))}
//           </ListGroup>
//         ))}
//     </div>
//   );
// }

// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import { useState, useMemo } from "react";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import { useSelector, useDispatch } from "react-redux";

// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const modules = useSelector((state: any) => state.modulesReducer.modules);
//   const userRole = useSelector((state: any) => state.authReducer.userRole);
//   const dispatch = useDispatch();

//   // Filter modules for this course only
//   const filteredModules = useMemo(
//     () => modules.filter((module: any) => module.course === cid),
//     [modules, cid]
//   );

//   return (
//     <div>
//       {/* Only FACULTY can see the "New Module" form */}
//       {userRole === "FACULTY" && (
//         <ModulesControls
//           setModuleName={setModuleName}
//           moduleName={moduleName}
//           addModule={() => {
//             dispatch(addModule({ name: moduleName, course: cid }));
//             setModuleName("");
//           }}
//         />
//       )}

//       {filteredModules.length === 0 && <p>No modules available.</p>}

//       {filteredModules.map((module: any) => (
//         <ListGroup key={module._id} className="rounded-0 mb-5" id="wd-modules">
//           <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />

//               {/* Module Name Display (Editable only for FACULTY) */}
//               {!module.editing ? (
//                 module.name
//               ) : userRole === "FACULTY" ? (
//                 <input
//                   className="form-control w-50 d-inline-block"
//                   onChange={(e) =>
//                     dispatch(updateModule({ ...module, name: e.target.value }))
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       dispatch(updateModule({ ...module, editing: false }));
//                     }
//                     if (e.key === "Escape") {
//                       dispatch(updateModule({
//                         ...module,
//                         editing: false,
//                         name: module.name
//                       }));
//                     }
//                   }}
//                   defaultValue={module.name}
//                 />
//               ) : (
//                 module.name
//               )}

//               {/* Only FACULTY can see module control buttons */}
//               {userRole === "FACULTY" && (
//                 <span>
//                   <button
//                     className="btn btn-sm btn-outline-primary ms-2"
//                     onClick={() => dispatch(editModule(module._id))}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-sm btn-outline-danger ms-2"
//                     onClick={() => dispatch(deleteModule(module._id))}
//                   >
//                     Delete
//                   </button>
//                 </span>
//               )}
//             </div>
//           </ListGroup.Item>

//           {/* Lessons inside the module */}
//           {module.lessons?.map((lesson: any) => (
//             <ListGroup key={lesson._id} className="wd-lessons rounded-0">
//               <ListGroup.Item className="wd-lesson p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" /> {lesson.name}

//                 {/* Only FACULTY can see lesson control buttons */}
//                 {userRole === "FACULTY" && (
//                   <span>
//                     <button className="btn btn-sm btn-outline-primary ms-2">
//                       Edit Lesson
//                     </button>
//                     <button className="btn btn-sm btn-outline-danger ms-2">
//                       Delete Lesson
//                     </button>
//                   </span>
//                 )}
//               </ListGroup.Item>
//             </ListGroup>
//           ))}
//         </ListGroup>
//       ))}
//     </div>
//   );
// // }
// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import { useState, useMemo } from "react";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import { useSelector, useDispatch } from "react-redux";

// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   // Provide a fallback if modules is undefined
//   const modules = useSelector((state: any) => state.modulesReducer?.modules || []);
//   const userRole = useSelector((state: any) => state.authReducer?.userRole);
//   const dispatch = useDispatch();

//   // Filter modules for this course only
//   const filteredModules = useMemo(
//     () => modules.filter((mod: any) => mod.course === cid),
//     [modules, cid]
//   );

//   return (
//     <div>
//       {/* Only FACULTY can see the "New Module" form */}
//       {userRole === "FACULTY" && (
//         <ModulesControls
//           moduleName={moduleName}
//           setModuleName={setModuleName}
//           addModule={() => {
//             // Make sure addModule action matches reducer's expected payload
//             dispatch(addModule({ name: moduleName, course: cid }));
//             setModuleName("");
//           }}
//         />
//       )}

//       {filteredModules.length === 0 && <p>No modules available.</p>}

//       {filteredModules.map((module: any) => (
//         <ListGroup key={module._id} className="rounded-0 mb-5" id="wd-modules">
//           <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />

//               {/* Module Name Display (Editable only for FACULTY) */}
//               {!module.editing ? (
//                 module.name
//               ) : userRole === "FACULTY" ? (
//                 <input
//                   className="form-control w-50 d-inline-block"
//                   defaultValue={module.name}
//                   onChange={(e) =>
//                     dispatch(updateModule({ ...module, name: e.target.value }))
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       dispatch(updateModule({ ...module, editing: false }));
//                     } else if (e.key === "Escape") {
//                       // Revert changes on Escape
//                       dispatch(updateModule({
//                         ...module,
//                         editing: false,
//                         name: module.name
//                       }));
//                     }
//                   }}
//                 />
//               ) : (
//                 module.name
//               )}

//               {/* Only FACULTY can see module control buttons */}
//               {userRole === "FACULTY" && (
//                 <span>
//                   <button
//                     className="btn btn-sm btn-outline-primary ms-2"
//                     // Pass an object if your reducer expects { _id: ... }
//                     onClick={() => dispatch(editModule({ _id: module._id }))}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-sm btn-outline-danger ms-2"
//                     onClick={() => dispatch(deleteModule({ _id: module._id }))}
//                   >
//                     Delete
//                   </button>
//                 </span>
//               )}
//             </div>
//           </ListGroup.Item>

//           {/* Lessons inside the module */}
//           {module.lessons?.map((lesson: any) => (
//             <ListGroup key={lesson._id} className="wd-lessons rounded-0">
//               <ListGroup.Item className="wd-lesson p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 {lesson.name}

//                 {/* Only FACULTY can see lesson control buttons */}
//                 {userRole === "FACULTY" && (
//                   <span>
//                     <button className="btn btn-sm btn-outline-primary ms-2">
//                       Edit Lesson
//                     </button>
//                     <button className="btn btn-sm btn-outline-danger ms-2">
//                       Delete Lesson
//                     </button>
//                   </span>
//                 )}
//               </ListGroup.Item>
//             </ListGroup>
//           ))}
//         </ListGroup>
//       ))}
//     </div>
//   );
// }
import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />

      {modules
  .filter((module: any) => module.course == cid)
  .map((module: any) => (
    <ListGroup key={module._id} className="rounded-0 mb-5" id="wd-modules">
      <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> 
          {!module.editing ? (
            module.name
          ) : (
            <input
              className="form-control w-50 d-inline-block"
              value={module.name}  // Controlled input prevents duplication
              onChange={(e) =>
                dispatch(updateModule({ ...module, name: e.target.value }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(updateModule({ ...module, editing: false }));
                }
              }}
            />
          )}
          <ModuleControlButtons
            moduleId={module._id}
            deleteModule={(moduleId: any) => dispatch(deleteModule(moduleId))}
            editModule={(moduleId: any) => dispatch(editModule(moduleId))}
          />
        </div>
      </ListGroup.Item>
      {module.lessons &&
        module.lessons.map((lesson: any) => (
          <ListGroup key={lesson._id} className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> {lesson.name}
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        ))}
    </ListGroup>
  ))}

    </div>
  );
}