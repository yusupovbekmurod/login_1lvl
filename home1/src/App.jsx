import { Routes, Route} from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Success from "./components/Success/Succes";
import Error from "./components/Error/Error"


function App() {
 
  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
