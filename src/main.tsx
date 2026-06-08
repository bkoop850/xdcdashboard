import '@filament/react/fonts/latin';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/xdcdashboard">
      <App />
    </BrowserRouter>
  </StrictMode>
);
