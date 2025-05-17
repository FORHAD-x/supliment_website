import { FaStar } from "react-icons/fa"; 
import './App.css'
import Boost from './components/boost/Boost'
import Collection from './components/Collection/Collection'
import Customers from './components/customers/Customers'
import Hero from './components/hero/Hero'
import Team from "./components/Team/Team";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Collection/>
      <div className='container flex items-center relative  justify-center py-[110px] bg-[#E1F1FE]'>
        <img src="public/curly2.png" alt=""  className='w-full absolute object-cover'/>
        <div className='z-20 relative '>
          <img src="public/image.png" alt="" className=''/>
          <div className='w-[579px] h-[176px] bg-white absolute top-[305px] left-[40px] rounded-[22px]'>
            <h3 className='font-Poppins font-semibold text-[25px] text-black text-center pt-[35px]'>Lorem Ipsum is simply dummy </h3>
            <p className='w-[480px]  font-Poppins font-normal pt-[16px] pb-[27px] text-[15px] text-black text-center mx-auto'>Lorem Ipsum is simply dummy text of the printing
               and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
            </p>
          </div>
        </div>

      </div>
      <Boost/>
      <Customers/>
      <Product/>
      <Team/>
      <Footer/>

    </>
  )
}

export default App
