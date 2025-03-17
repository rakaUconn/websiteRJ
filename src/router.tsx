import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import UnderwaterImagingResearch from './pages/UnderwaterImagingResearch';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/research',
      element: <ResearchPage />,
    },
    {
      path: '/publications',
      element: <PublicationsPage />,
    },
    {
      path: '/research/underwater-imaging',
      element: <UnderwaterImagingResearch />,
    },
  ],
  {
    basename: '/websiteRJ',
  }
);

export default router;