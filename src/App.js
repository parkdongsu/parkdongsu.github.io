import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./routes/Home"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
