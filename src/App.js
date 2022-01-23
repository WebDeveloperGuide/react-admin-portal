import Routing from './routes';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />	
      <Routing/>
    </div>
  );
}

export default App;
