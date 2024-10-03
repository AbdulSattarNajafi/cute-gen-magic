import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import PageNotFound from './pages/PageNotFound';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { StepsProvider } from './contexts/stepsContext';

function App() {
  return (
    <StepsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Home />} />
            <Route path='privacy-policy' element={<Privacy />} />
            <Route path='terms-of-services' element={<Terms />} />
            <Route path='contact' element={<Contact />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StepsProvider>
  );
}

export default App;
