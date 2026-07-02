import { createHashRouter } from 'react-router-dom';
import App from './App';
import ResearchIndexPage from './pages/ResearchIndexPage';
import ProjectPostPage from './pages/ProjectPostPage';
import AboutPage from './pages/AboutPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import RootLayout from './components/layout/RootLayout';

const router = createHashRouter([
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
        element: <ResearchIndexPage />,
      },
      {
        path: 'research/:slug',
        element: <ProjectPostPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'publications',
        element: <PublicationsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;