import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import UnderwaterImagingResearch from './pages/UnderwaterImagingResearch';
import DynamicPolarimetricImagingResearch from './pages/DynamicPolarimetricImagingResearch';
import ThreeDImagingSystemsPage from './pages/ThreeDImagingSystemsPage';
import ComputationalImagingPage from './pages/ComputationalImagingPage';
import OpticalMicroscopyPage from './pages/OpticalMicroscopyPage';
import AdminPage from './pages/AdminPage';
import RootLayout from './components/layout/RootLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: 'research',
          element: <ResearchPage />,
        },
        {
          path: 'publications',
          element: <PublicationsPage />,
        },
        {
          path: 'research/3d-imaging-systems',
          element: <ThreeDImagingSystemsPage />,
        },
        {
          path: 'research/underwater-imaging',
          element: <UnderwaterImagingResearch />,
        },
        {
          path: 'research/dynamic-polarimetric-imaging',
          element: <DynamicPolarimetricImagingResearch />,
        },
        {
          path: 'research/computational-imaging',
          element: <ComputationalImagingPage />,
        },
        {
          path: 'research/optical-microscopy',
          element: <OpticalMicroscopyPage />,
        },
        {
          path: 'admin',
          element: <AdminPage />,
        },
      ],
    },
  ],
  {
    basename: '/websiteRJ',
  }
);

export default router;