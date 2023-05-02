import { Routes, Route } from 'react-router-dom';
import NftCreate from '@/pages/NftCreate';
import NftComplete from '@/pages/NftComplete';

const routingList = [
  { path: '/', element: <NftCreate /> },
  { path: '/complete', element: <NftComplete /> },
];

export default function Router() {
  return (
    <Routes>
      {routingList.map((el) => (
        <Route key={el.path} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}
