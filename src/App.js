import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { routes } from './Routes/index'
import Index from './Pages';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          {
            routes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
