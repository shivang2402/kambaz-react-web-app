import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "./types";

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [
    {
      id: "course-101", title: "Introduction to Programming", description: "Learn the basics of programming.", instructor: "John Doe",
      name: undefined,
      number: undefined,
      startDate: undefined,
      endDate: undefined,
      image: undefined
    },
    {
      id: "course-202", title: "Advanced JavaScript", description: "Deep dive into modern JavaScript concepts.", instructor: "Jane Smith",
      name: undefined,
      number: undefined,
      startDate: undefined,
      endDate: undefined,
      image: undefined
    },
    {
      id: "course-303", title: "Data Structures & Algorithms", description: "Understand fundamental data structures and algorithms.", instructor: "Alice Johnson",
      name: undefined,
      number: undefined,
      startDate: undefined,
      endDate: undefined,
      image: undefined
    }
  ],
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
