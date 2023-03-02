// Import
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.scss'
import { Provider } from 'react-redux/es/exports'
import { store } from './Redux/store'


// Main func start here
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// Notes from Ivan :
// * Using Vite instead of Create react App as webpack framework.
// * Had moved App.tsx and App.scss to ./App to make cleaner directory.
// * Don't forget to run [yarn add react-ts] or [npm install react-ts] to install node modules and dependencies 
// * Issues : When run yarn add react-ts node sass not installed properly, but SCSS running ok
// * run with yarn dev

// Module :
// DarkMode / LightMode
// CustomBox
// CustomButton
// CustomCard
// CustomCenter
// CustomInput
// CustomModal
// CustomSlider
// CustomSpinner
// Text
// Footer
// Header
// FallBack (Loading Screen)