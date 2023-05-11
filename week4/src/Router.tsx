import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/SearchResult/ResultPage';
import SearchInput from './components/SearchInput';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<SearchPage />}>
            <Route path=':location' element={<ResultPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
