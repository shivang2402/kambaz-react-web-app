import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "./types";

interface CoursesState {
  courses: Course[];
}

const defaultCourses: Course[] = [
  {
    id: "101",
    name: "Intro to Programming",
    description: "Learn the basics of programming with Python and JavaScript.",
    number: "CS101",
    startDate: "2024-01-10",
    endDate: "2024-05-15",
    image: "https://example.com/course-images/programming.jpg",
    title: "Introduction to Programming",
    instructor: "Dr. John Doe"
  },
  {
    id: "102",
    name: "Web Development Basics",
    description: "Understand the core concepts of web development using HTML, CSS, and JavaScript.",
    number: "CS102",
    startDate: "2024-02-01",
    endDate: "2024-06-20",
    image: "https://example.com/course-images/web-development.jpg",
    title: "Web Development Fundamentals",
    instructor: "Prof. Jane Smith"
  },
  {
    id: "103",
    name: "Database Foundations",
    description: "Master SQL and database design principles for structured data management.",
    number: "CS103",
    startDate: "2024-03-15",
    endDate: "2024-07-30",
    image: "https://example.com/course-images/database.jpg",
    title: "Database Foundations",
    instructor: "Dr. Alice Johnson"
  },
];

const initialState: CoursesState = {
  courses: defaultCourses, // Ensure these courses exist for all users
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(course => course.id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      const index = state.courses.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
