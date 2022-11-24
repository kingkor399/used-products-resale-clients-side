import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="w-5/6 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
