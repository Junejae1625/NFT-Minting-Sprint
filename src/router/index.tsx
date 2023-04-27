import { Routes, Route } from 'react-router-dom';
import NftCreate from '@/pages/NftCreate';

const routingList = [{ path: '/', element: <NftCreate /> }];

export default function Router() {
  return (
    <Routes>
      {routingList.map((el) => (
        <Route key={el.path} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}
