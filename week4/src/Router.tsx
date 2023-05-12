import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';
import Loading from './components/Loading';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/loading' element={<Loading />} />
          <Route path='/' element={<SearchPage />}>
            <Route path='/:forecastType/:location' element={<ResultPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
