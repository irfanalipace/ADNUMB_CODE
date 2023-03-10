import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage';
import ForgetEmail from './components/login/ForgetEmail';
import ResetEmail from './components/login/ResetEmail';
import Form from './components/login/Form';
import Dashboard from './components/login/Dashboard';
import Data from './components/login/Data';
import { UploadFiles } from './components/login/UploadFiles';
import Dumy from './components/login/Dumy';

function App() {
  return (
    <div className="App">
   {/* <LoginPage />  */}
 
    {/* <ForgetEmail />   */}
  {/* <ResetEmail /> */}
<Dashboard />
{/* <Data /> */}
{/* <UploadFiles /> */}

    </div>
  );
}

export default App;
