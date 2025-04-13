import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';
import MainRouter from './router';

function App() {
  return (
    <div className="bg-secondary-100">
      <MainRouter />
    </div>
  );
}

export default App;
