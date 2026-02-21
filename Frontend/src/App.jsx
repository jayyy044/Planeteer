import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import VideoUploadPage from './Pages/VideoUploadPage/VideoUploadPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
