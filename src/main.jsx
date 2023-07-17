import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Test from './Test.jsx'
import UploadContainer from './UploadContainer.jsx'
import NavbarTest from './NavbarTest.jsx'
import About from './About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <NavbarTest /> */}
    <App />
    <About />
    <Test />
    {/* <UploadContainer /> */}
  </React.StrictMode>,
)
