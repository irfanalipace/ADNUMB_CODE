import logo from './logo.svg';
import './App.css';
import { Registerpage } from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ForgetEmail from './components/login/ForgetEmail';
import ResetEmail from './components/login/ResetEmail';
import Form from './components/login/Form';
import Dashboard from './components/login/Dashboard';
import Data from './components/login/Data';
import { UploadFiles } from './components/login/UploadFiles';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/login/LoginForm';
// import { LoginForm } from './components/login/LoginForm';


function App() {
  return (
    <div className="App">
   <PrivateRoute /> 
 {/* <Registerpage /> */}
 {/* <LoginPage /> */}

    </div>
  );
}

export default App;
