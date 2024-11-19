import React from 'react'
import facebook from '../Assets/facebook.svg'
import likdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import insta from '../Assets/insta.svg'
import logo from '../Assets/Logo.svg'
import Image from "next/image";
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-[1280px] h-[54x]  flex flex-col '>
      {/* header */}
      <div className='pl-[62px] mr-[64x] flex bg-[#F7F7F7] h-[54x] justify-between mb-[16px]'>
        <div className='flex font-roboto text-[14px] py-[12px] font-normal'>
            <p className='leading-[21px] text-[14px] py-[4.5px] pr-[16px] border-solid border-r-[1px] border-[#676767] w-[205px] tracking-tighter'>Phone Number: 956 742 455 678</p>
            <p className='leading-[21px] py-[4.5px] ml-[16px] w-[149px]'>Email:info@ddsgnr.com</p>
        </div>
        <div className='flex w-[132px] h-[24px] items-center ml-[652px] my-[15px] mr-[64px]'>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={facebook} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={insta} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={twitter} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center '><Image className='' src={likdin} alt="" /></div>
        </div>
      </div>
      {/* navbar */}
      <div className='w-[1280px] h-[72px]  bg-[#F7F7F7] py-[14px]'>
        <div className="w-[1152px] h-[44px]  mx-[64px] flex">
          <div className='w-[130.6px] h-[41px] py-[6.81px]'>
            <Image src={logo} alt="" />
          </div>
          <div className='w-[910px] h-[44px] ml-[111.4px] flex'>
            <nav className='flex font-roboto text-[16px]'>
            <li className='p-[10px] mr-[32px] w-[64px] h-[44px] list-none'><Link href="#Home">Home</Link></li>
            <li className='p-[10px] mr-[32px] w-[79px] h-[44px] list-none'><Link href="#Courses">Courses</Link></li>
            <li className='p-[10px] mr-[32px] w-[81px] h-[44px] list-none'><Link href="#Services">Services</Link></li>
            <li className='p-[10px] mr-[32px] w-[113px] h-[44px] list-none'><Link href="#Achievement">Achievement</Link></li>
            <li className='p-[10px] mr-[32px] w-[86px] h-[44px] list-none'><Link href="#AboutUs">About Us</Link></li>
            <li className='p-[10px] mr-[32px] w-[104px] h-[44px] list-none'><Link href="#Testimonial">Testimonial</Link></li>
          </nav>
          <div className='h-[40px] w-[191px] flex py-[1px]'>
            <button className='w-[80px] h-[40px] rounded-[5px] border-solid border-black border-[1px]'>Login</button>
            <button className='w-[95px] h-[40px] rounded-[5px] bg-black text-white ml-[16px]'>Login</button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
