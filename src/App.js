
import './App.css';
import Everyone from './Components/Everyone';
import Navbar from "./Components/Navbar"
import Shoes from './Components/Shoes';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <marquee>
      <div className='grid grid-cols-5 text-7xl font-bold'>
        <p>Sneakers</p>
        <p>Oxfords</p>
        <p>Loafers</p>
        <p>Chelesa</p>
        <p>Puma</p>
        </div>
    </marquee>
    <Shoes></Shoes>
    {/* <Everyone></Everyone> */}
    </>
  );
}

export default App;
