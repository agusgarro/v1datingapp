
import './App.css';
import { Route } from "react-router-dom"
import Events from './components/events/Events'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Events />
     <Route 
     exact path='/homepage'
     component={Homepage}
     />
    </div>
  );
}

export default App;


