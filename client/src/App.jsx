import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NoteState from "./context/NoteState"
import NavBar from "./pages/NavBar"
import FetchTasks from "./pages/FetchTasks"
import { ToastContainer } from "react-toastify"
import CreateTask from "./pages/CreateTask"
import FilterTask from "./pages/FilterTask"
function App() {

  return (
    <Router>
      <NoteState>
        <NavBar/>
        <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/tasks" element={<FetchTasks/>}/>
        <Route exact path="/editTask/:id" element={<CreateTask/>}/>
        <Route exact path="/filterTask" element={<FilterTask/>}/>
      </Routes>
      </NoteState>
    </Router>
  )
}

export default App
