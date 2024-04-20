import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AbtMenu from "./components/Aboutmenu/AbtMenu";
import Contactsus from "./components/contact/Contactsus";
import ShopCrd from "./components/Shopping/ShopCrd";
import ParamsCrds from "./components/Productcrd/ParamsCrds";
import Main from "./Main";
import Owls from "./Owls";
import Chartss from "./components/Chartss";
import HomePage from "./FIreBase Auth/HomePage";
import Login from "./FIreBase Auth/Login";
import Register from "./FIreBase Auth/Register";
import Loginsuccess from "./FIreBase Auth/Loginsuccess";
import LoginPage from "./FIreBase Auth/newFirebase/LoginPage";
import Navs from "./FIreBase Auth/newFirebase/Navs";
import ArrivlParamsCrds from "./components/New Arrival crds/ArrivlParamsCrds";
import Theme1checkout from "./components/other-page/Theme1checkout";
import Theme1payment from "./components/other-page/Theme1payment";

function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/abt' element={<AbtMenu/>}/>
  <Route path='/cont' element={<Contactsus/>}/>
  <Route path='/shop' element={<ShopCrd/>}/>
  <Route path='/parms/:id' element={<ParamsCrds/>}/>
  <Route path='/arivalparms/:id' element={<ArrivlParamsCrds/>}/>
  <Route path='/Checkout' element={<Theme1checkout/>}/>
  <Route path='/payment' element={<Theme1payment/>}/>

 

  

  
</Routes>
</BrowserRouter>
      {/* <Owls/> */}
      {/* <Chartss/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navs />} />

          <Route path="/register" element={<Register />} />
          <Route path="/LoginSuccess" element={<Loginsuccess />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
<Routes>
  <Route path='/' element = {<LoginPage/>}/>
  <Route path='/register' element = {<Register/>}/>
</Routes>

</BrowserRouter> */}
    </div>
  );
}

export default App;
