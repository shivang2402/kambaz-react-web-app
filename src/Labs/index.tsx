import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";


export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Created by: Shivang Manishkumar Patel</p>
      <p> Sec 01 </p>
      <li>
        <a 
          href="https://github.com/shivang2402/kambaz-react-web-app.git" 
          id="wd-github"
        >
          GitHub Repository
        </a>
      </li>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
