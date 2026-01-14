import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state?.courses);
  const removeCourse = useCourseStore((state) => state?.removeCourse);
  const toggleCoursesStatus = useCourseStore((state) => state?.toggleCoursesStatus);

  const handleToggle = (id:number) => {
    toggleCoursesStatus(id);
  };

  const handleRemove = (id: number) => {
    removeCourse(id);
  };

  return (
    <>
      <ul>
        {courses?.map((course: any) => {
          return (
            <React.Fragment key={course}>
              <li
                className={`course-item`}
                style={{ backgroundColor: course.completed ? "00FF0044" : "white" }}
              >
              <span className="course-item-col-1">
                <input
                  type="checkbox"
                  checked={course.completed}
                  onChange={() =>handleToggle(course.id)}
                />
              </span>
              <span style={{"color":"black","float":"left"}}>{course?.title}</span>
              <button
                className="delete-btn"
                onClick={() => handleRemove(course.id)}
              >Delete</button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
