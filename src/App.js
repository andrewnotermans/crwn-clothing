import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './routes/home/home.component';


const Navigation = () => {
  return(
    <div>
      <div>
        <h1>I'm the Nav Bar</h1>
      </div>
      <Outlet/>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<h1>I am the Shop Page</h1>}/>      
      </Route>      
    </Routes>
  );
  
}

export default App;