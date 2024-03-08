import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import ContactMePage from './pages/ContactMePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';
import ResumePage from './pages/ResumePage'

const router = createBrowserRouter([
{
  path:'/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,  // start from root url(main path):   /
      element: <AboutMePage />,
    },
    {
      path: 'portfolio',
      element: <PortfolioPage />,
    },
    {
      path: 'contact-me',
      element: <ContactMePage />,
    },
    {
      path: 'resume',
      element: <ResumePage />,
    }
  ],
}

]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// WHEN I view the header
// THEN I am presented with the developer's name and


// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
