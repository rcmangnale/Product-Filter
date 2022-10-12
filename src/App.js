import "./App.css";

import Navbar from "./Components/Navbar";
import Shoes from "./Components/Shoes";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <marquee>
        <div className="grid grid-cols-5 text-lg font-bold lg:gap-2 lg:text-7xl">
          <p>Sneakers</p>
          <p>Oxfords</p> 
          <p>Loafers</p>
          <p>Chelesa</p>
          <p>Puma</p>
        </div>
      </marquee>
      <Shoes></Shoes>
    </>
  );
}

export default App;

//Using router
// import Men from "./Components/Men";
// import Women from "./Components/Women";
// import Unisex from "./Components/Unisex";
// import Kids from "./Components/Kids";
// import Everyone from "./Components/Everyone"
//import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'

{
  /* 
      ReactDOM.render(
        
        <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" component={Everyone} />
        <Route activeClassName='is-active' path="/men" component={Men} />
        <Route activeClassName='is-active' path="/women" component={Women} />
        <Route activeClassName='is-active' path="/unisex" component={Unisex} />
        <Route  activeClassName='is-active' path="/kids" component={Kids} />

        </Routes>
      </BrowserRouter> 
      document.getElementById('App')
      );
      */
}
