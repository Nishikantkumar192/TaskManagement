import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NoteState from "./context/NoteState"
import NavBar from "./pages/NavBar"
import FetchTasks from "./pages/FetchTasks"
function App() {

  return (
    <Router>
      <NoteState>
        <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/tasks" element={<FetchTasks/>}/>
      </Routes>
      </NoteState>
    </Router>
  )
}

export default App
