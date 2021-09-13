import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
