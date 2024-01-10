import HomePage from "../page";
import About from "../(pages)/(layout)/about/page";
import Contact from "../(pages)/(layout)/contact/page";
const routes = [
    {
      path: '/',
      element: <HomePage />, // Replace with your actual component
      requiresAuth: false, // Home page accessible without authentication
    },
    {
      path: '/about',
      element: <About />, // Replace with your actual component
      requiresAuth: true, // About page requires authentication
      access: ['admin', 'vendor'], // Define the roles that have access to this route
    },
    {
      path: '/contact',
      element: <Contact />, // Replace with your actual component
      requiresAuth: true, // Contact page requires authentication
    },
    // Add more routes as needed
  ];

  export default routes;