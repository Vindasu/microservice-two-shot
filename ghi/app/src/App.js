import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatForm from './HatForm';
import ShoeForm from './ShoeForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/hats/new" element={<HatForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// function App2() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//         </Routes>
//         <Routes>
//           <Route path="/shoes/new" element={<ShoeForm />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
