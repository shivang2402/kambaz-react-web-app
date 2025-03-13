import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrolledCourses: string[];
}

const initialState: EnrollmentState = {
  enrolledCourses: ["RS108", "RS102", "RS101"], // Default courses
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<string>) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
      }
    },
    unenrollCourse: (state, action: PayloadAction<string>) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (courseId) => courseId !== action.payload
      );
    },
    setEnrollments: (state, action: PayloadAction<string[]>) => {
      state.enrolledCourses = action.payload;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
