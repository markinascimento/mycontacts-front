// -> Import da lib externa de Rotas
import { Routes, Route } from 'react-router-dom';

// -> Import das páginas
import { Home } from '../pages/Home';
import { Edit } from '../pages/Edit';
import { Create } from '../pages/Create';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/create' element={<Create />} />
    </Routes>
  );
}
