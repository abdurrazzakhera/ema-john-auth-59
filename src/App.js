import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Invertorys from "./components/Inventorys/Invertorys";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";
import RequirAuth from "./components/RequirAuth/RequirAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route
          path='/shipment'
          element={
            <RequirAuth>
              <Shipment></Shipment>
            </RequirAuth>
          }
        ></Route>
        <Route path='/inventory' element={<Invertorys></Invertorys>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>} />
      </Routes>
    </div>
  );
}

export default App;
