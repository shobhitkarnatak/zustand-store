import "./App.css";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";

function App() {
  return (
    <div className="main-container">
      <h1 style={{fontSize:"20px", fontWeight:"bold", marginBottom:"2rem", color:"black"}}>My Course List</h1>
      <CourseForm />
      <CourseList/>
    </div>
  );
}

export default App;
