import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DesktopApp from './DesktopApp.jsx'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const isDesktop = window.innerWidth > 800;
const RenderApp = isDesktop ? DesktopApp : App;

root.render(
  <StrictMode>
    <RenderApp />
  </StrictMode>
);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
