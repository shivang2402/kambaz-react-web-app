import { useParams } from 'react-router-dom';

const ASSIGNMENTS = {
    "123": {
      name: "A1 - ENV + HTML",
      description: "The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section Links to each of the lab assignments Links to the Kambaz application Links to all relevant source code repositories The Kambaz application should include a Link to navigate back to the landing page.",
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
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue={assignment.name} />
      <br />
      <br />

      <textarea 
        id="wd-description"
        rows={6}
        cols={50}
        defaultValue={assignment.description}
      />
      <br />
      <br />

      <div>
        <label htmlFor="wd-points">Points</label>
        <input id="wd-points" type="number" defaultValue={assignment.points} />
      </div>
      <br />

      <div>
        <label htmlFor="wd-group">Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS">
          <option>ASSIGNMENTS</option>
        </select>
      </div>
      <br />

      <div>
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="Percentage">
          <option>Percentage</option>
        </select>
      </div>
      <br />

      <div>
        <label htmlFor="wd-submission-type">Submission Type</label>
        <select id="wd-submission-type" defaultValue="Online">
          <option>Online</option>
        </select>
      </div>
      <br />

      <h4>Online Entry Options</h4>
      <div>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label>
      </div>
      <div>
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label>
      </div>
      <div>
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label>
      </div>
      <div>
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label>
      </div>
      <div>
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Upload</label>
      </div>
      <br />

      <div>
        <label htmlFor="wd-assign-to">Assign to</label>
        <input id="wd-assign-to" defaultValue="Everyone" />
      </div>
      <br />

      <div>
        <label htmlFor="wd-due-date">Due</label>
        <input 
          id="wd-due-date" 
          type="date" 
          defaultValue={assignment.dueDate} 
        />
      </div>
      <br />

      <div>
        <label htmlFor="wd-available-from">Available from</label>
        <input 
          id="wd-available-from" 
          type="date" 
          defaultValue={assignment.availableFrom}
        />
        <br />
        <label htmlFor="wd-available-until">Until</label>
        <input 
          id="wd-available-until" 
          type="date" 
          defaultValue={assignment.availableUntil}
        />
      </div>
      <br />

      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
