import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<p>Página Inicial</p>} />
      
      <Route path='*' element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}