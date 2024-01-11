import {
  NavLink ,
  Route,
  Routes
} from "react-router-dom";
import { Map } from './components/MapBox';
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { Navabr } from "./components/Navbar";
import { Register } from "./components/auth/register";
import { Login } from "./components/auth/login";

function App() {
  return (
    <>
    <Navabr />
    <Routes>
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/map' element={<Map />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
