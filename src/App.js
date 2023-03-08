import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage';
import ForgetEmail from './components/login/ForgetEmail';
import ResetEmail from './components/login/ResetEmail';
import Form from './components/login/Form';

function App() {
  return (
    <div className="App">
   <LoginPage /> 
 
    {/* <ForgetEmail />   */}
  {/* <ResetEmail /> */}
{/* <SiginUp /> */}
    </div>
  );
}

export default App;
