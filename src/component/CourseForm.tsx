import { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false, 
    }); 
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
          console.log(courseTitle)
        }}
        className="form-input"
      />
      <button onClick={() => handleCourseSubmit()} className="form-submit-btn">
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
