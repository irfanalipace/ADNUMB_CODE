import logo from './logo.svg';
import './App.css';

import PrivateRoute from './components/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
   <PrivateRoute /> 
  
    </div>
  );
}

export default App;
