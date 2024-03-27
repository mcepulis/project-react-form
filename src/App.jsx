import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';
import { LayoutWithAds } from './layout/LayoutWithAds';
import { PageHome } from './pages/PageHome';
import { PageNotFound } from './pages/PageNotFound';
import { PageBasketball } from './pages/PageBasketball';
import { PageVegetables } from './pages/PageVegetables';
import { PageVegetablesInner } from './pages/PageVegetablesInner';
import { PageStudents } from './pages/PageStudents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<PageHome />} />
          <Route path='/basketball' element={<PageBasketball />} />
          <Route path='/students' element={<PageStudents />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route Component={LayoutWithAds}>
          <Route path='/vegetables' element={<PageVegetables />} />
          <Route path='/vegetables/:id' element={<PageVegetablesInner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;