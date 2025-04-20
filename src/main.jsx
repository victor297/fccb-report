import { StrictMode } from 'react'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <Provider store={store}>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          style: { background: "rgb(51 65 85)", color: "#fff" },
        }}
      />
      <App />
    </BrowserRouter>
  </Provider>
  </StrictMode>,
)
