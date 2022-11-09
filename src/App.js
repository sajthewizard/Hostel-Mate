
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Routes/Routes';

function App() {

  return (
    <div data-theme="dracula" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
