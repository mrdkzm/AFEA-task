import { Register } from "./Register";
import {Home} from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (



<Router>
<Routes>


  
    <Route path="/" element={<Home />  } /> 
    <Route path="/register" element={<Register />  } />

</Routes>
</Router>

  );
}

export default App;
