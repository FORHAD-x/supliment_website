import { HiStar } from "react-icons/hi"; 
import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='Hero bg-[#E3FFE1] container'>
        <div className="main_nav  flex items-center justify-between pt-[20px]">
            <div className='flex items-center '>
                <div>
                <img src="public/logo.png" alt="" className='pl-[27px]'  />
                </div>
                    <ul className='flex ml-[85px] gap-5 text-[15px] font-Poppins '>
                        <li><a href="" className='flex items-center gap-5'>SHOP <img src="public/Ellipse 3.png" alt="" /></a></li>
                        <li><a href="" className='flex items-center gap-5'>DELIVERY <img src="public/Ellipse 3.png" alt="" /></a></li>
                        <li><a href="" className='flex items-center gap-5'>BOXES <img src="public/Ellipse 3.png" alt="" /></a></li>
                        <li><a href="" className='flex items-center gap-5'>ABOUT <img src="public/Ellipse 3.png" alt="" /></a></li>
                    </ul>

            </div>
            <div className='flex gap-[10px] mr-[47px]'>
                <button className=' w-[37px] h-[37px] border-1 border-[#1E403D] flex items-center justify-center rounded-full'><img src="public/search.png" alt="" /></button>
                <button className=' w-[37px] h-[37px] border-1 border-[#1E403D] flex items-center justify-center rounded-full'><img src="public/search.png" alt="" /></button>
                <button className=' w-[37px] h-[37px] border-1 border-[#1E403D] flex items-center justify-center rounded-full'><img src="public/search.png" alt="" /></button>
                <button className=' w-[37px] h-[37px] border-1 border-[#1E403D] flex items-center justify-center rounded-full'><img src="public/search.png" alt="" /></button>
            </div>
        </div>
        {/*================== main_hero=========== */}
        <div className="main_hero bg-[#E3FFE1] pt-[77px]">
          <h2 className='font-Poppins font-bold text-[#1E403D] text-[100px] text-center'>Elevate your wellness</h2>

              <div className='main_flex_b0x flex relative'>
                <div className='left_text mt-[233px] ml-[50px]'>
                  <p className='w-[265px] font-Poppins font-medium text-[#1E403D] text-[15px] '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                  </p>
                  <div className='flex gap-[23px] pt-[30px] pb-[108px]'>
                    <button className='flex bg-[#1E403D] gap-1 items-center justify-center px-[20px] py-[14px] rounded-[30px] text-[15px] font-Poppins font-medium text-white '>Add to Cart <img src="public/shopping-cart-01.png" alt="" /></button>
                    <h3 className='font-Poppins font-semibold text-[40px] relative text-[#1E403D] '><span className='absolute top-[0px] left-[-10px] font-Poppins font-bold text-[18px] '>$</span> 68.<span className='text-[rgba(30,64,61,0.5)]'>00</span></h3>
                  </div>
                  <div className='flex items-center gap-[21px] pb-[82px]'>
                    <img src="public/4people.png" alt="" />
                    <p className="w-[85px] text-[15px] font-Poppins font-normal text-[#1E403D]">100k Happy Customer</p>
                  </div>
                </div>
                <div className='flex'>
                  <img src="public/hero.png" alt="" />
                </div>
                <div>
                  <p className='w-[202px]'>Lorem Ipsum is simply dummy text of the printing</p>
                  <img src="public/tablets.png" alt="" className='absolute top-[182px] left-[750px]' />
                  <div className='Reviews mt-[411px] ml-[112px] flex gap-1'>
                    <button className="flex items-center border-1 border-[#1E403D] pl-2.5 pr-3.5 py-1.5 rounded-[30px] font-Poppins font-medium text-[#1E403D] text-[15px] "><HiStar className="text-[#FFC04B] h-[18px] w-[18px]"/> 5.0</button>
                    <button className="flex items-center border-1 border-[#1E403D] pl-2.5 pr-3.5 py-1 rounded-[30px] font-Poppins font-medium text-[#1E403D] text-[15px] ">Customer Reviews</button>

                  </div>
                </div>
            </div>
        </div>
        {/*================== main_hero  end =========== */}


    </section>
    </>
  )
}

export default Hero