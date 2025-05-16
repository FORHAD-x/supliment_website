import { FaStar } from "react-icons/fa"; 
import './App.css'
import Boost from './components/boost/Boost'
import Collection from './components/Collection/Collection'
import Customers from './components/customers/Customers'
import Hero from './components/hero/Hero'
import Team from "./components/Team/Team";

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
      <div className='container flex  items-center relative  justify-center py-[90px] bg-[#FEF2E6]'>
        <img src="public/curly.png" alt=""  className='w-full absolute top-[167px] object-cover'/>
        <div className='z-20 text-center '>
          <img src="public/product2.png" alt="" className='mx-auto'/>
          <p className="font-Poppins font-bold text-[33px] text-black">only <span className="text-[59px] pl-4">$35.99</span></p>
          <p className="font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)] pb-3">Lorem Ipsum is simply dummy text of the printing and</p>
          
          <p className="flex items-center gap-[10px] ml-[59px] font-Poppins font-semibold text-[19px] pb-5">
            <FaStar color="FFC04B" size={18}/>
            <FaStar color="FFC04B" size={18}/>
            <FaStar color="FFC04B" size={18}/>
            <FaStar color="FFC04B" size={18}/>
            <FaStar color="FFC04B" size={18}/>
             12.832 
            <span className="font-normal text-[rgba(0,0,0,0.5)]">Review</span>
          </p>

          <div className='flex gap-[21px] items-center ml-[87px]'>
            <button className='flex bg-[#1E403D] gap-1 items-center justify-center px-[18px] py-[14px] rounded-[30px] text-[15px] font-Poppins font-medium text-white '>Add to Cart <img src="public/shopping-cart-01.png" alt="" />
            </button>
            <span className='w-[46px] h-[46px] flex items-center justify-center'><img src="public/fav.png" alt="" /></span>
          </div>
        </div>

      </div>
      <Team/>
    </>
  )
}

export default App
{/* <div className="box1">
            <h3 className="w-[345px]  bg-[#FFF9ED] rounded-[16px] p-6">
            <div className='flex gap-[22px] items-center'>
                <img src="public/customer.png" alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div> */}