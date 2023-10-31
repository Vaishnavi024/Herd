import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Updatecourse from "./updateCourse.jsx";
import Getcourse from "./Getbooking.jsx";
import Createbooking from './Createbooking.jsx';

function App() {
  return (
    <div style={{
    width:"100vw", 
    height: "100vh",
    backgroundColor:"#e5e5e5"}}>
      
      <Router>
      <Appbar/>
        <Routes>
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/signin" }element={<Signin/>} />
          <Route path={"/createbooking" }element={<Createbooking/>} />
          <Route path={"/course/:courseId" }element={<Updatecourse/>} />
          <Route path={"/getcourses" }element={<Getcourse/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;