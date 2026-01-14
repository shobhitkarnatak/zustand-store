import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface Course { 
  id: number;
  title: string;
  completed: boolean;
}

interface CourseStoreData {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: Course["id"]) => void;
  toggleCoursesStatus: (courseId: Course["id"]) => void;
}

const useCourseStore = create<CourseStoreData>()(
  devtools(
    persist(
      (set) => ({
        courses: [],

        addCourse: (course) =>
          set((state) => ({
            courses: [course, ...state.courses],
          })),

        removeCourse: (courseId) =>
          set((state) => ({
            courses: state.courses.filter(
              (course) => course.id !== courseId
            ),
          })),

        toggleCoursesStatus: (courseId) =>
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? { ...course, completed: !course.completed }
                : course
            ),
          })),
      }),
      {
        name: "courses",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useCourseStore;
