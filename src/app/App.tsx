import { Route, Routes } from 'react-router-dom';
import { MapPage, UsersPage } from '@pages';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'rgb(237, 247, 247' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" index element={<UsersPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
