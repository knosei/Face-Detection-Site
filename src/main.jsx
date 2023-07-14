import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Test from './Test.jsx'
import UploadContainer from './UploadContainer.jsx'
import NavbarTest from './NavbarTest.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <NavbarTest /> */}
    <App />
    {/* <Test /> */}
    {/* <UploadContainer /> */}
  </React.StrictMode>,
)
