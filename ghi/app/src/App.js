import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatForm from './HatForm';
import HatsList from './HatsList';
import ShoeForm from './ShoeForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hats" element={<HatsList />} />
          <Route path="/hats/new" element={<HatForm />} />
          <Route path="/shoes/new" element={<ShoeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
