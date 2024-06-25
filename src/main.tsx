import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/reset.scss';

import { BrowserRouter } from 'react-router-dom';
import { UserPostProvider } from './shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserPostProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserPostProvider>,
);
