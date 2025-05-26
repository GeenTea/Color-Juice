import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/Home/About.jsx'
import Header from './propertis/Header/header.jsx'
import ContactUs from './pages/Home/contact-us.jsx'
import './index.css'

/* `createRoot(document.getElementById('root')).render` is a method call that creates a root element in
the DOM where the React application will be rendered. The `createRoot` function is used to create a
root for a concurrent React tree. The `document.getElementById('root')` part retrieves the DOM
element with the id 'root' where the React application will be mounted. Finally, the `render` method
is called to render the React application within the root element. */

createRoot(document.getElementById('root')).render(
  /* The `<BrowserRouter>` component is a higher-level component provided by React Router that enables
  routing functionality in a React application. It is used to wrap the entire application and
  provide routing capabilities to the components within it. */
  <BrowserRouter>
    {/* The `<Routes>` component is setting up routes for different pages in a React application using
    React Router. Each `<Route>` component within the `<Routes>` component specifies a path and the
    corresponding component to render when that path is matched. */}
    <Routes>
      {/* These lines of code are setting up routes for different pages in a React application using
      React Router. */}
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<About />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
    </Routes>
  </BrowserRouter>
)
