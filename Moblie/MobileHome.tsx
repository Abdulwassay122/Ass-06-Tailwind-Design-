import React from 'react'
import Image from "next/image";
import image from '../Assets/Image2.svg'
export default function MobileHome() {
  return (
    <section className='w-[428px]'>
      <div className='w-[428px] h-[390px] px-[24px]  py-[64px]  flex flex-col gap-[24px]'>
        <div className="w-[380px] h-[174px] flex flex-col  gap-[24px]  ">
          <h3 className=' w-[380px] text-[40px] font-bold leading-[48px]'>Learn new skills online with ease</h3>
          <p className=" text-[18px] leading-[27px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className="w-[358px] h-[64px] pt-[16px] flex gap-[16px]">
          <button className='h-12 w-[178px] bg-black text-white rounded-[5px]'>Start learning now</button>
          <button className='h-12 w-[164px] border-black border-solid border-[1px] rounded-[5px]'>Explore Courses</button>
        </div>
        </div>
      <div className="w-full  h-[390px]">
        <Image className='w-full h-[390px]' width={428} height={390} src={image} alt="" />
      </div>
      <div className="w-[428px] has-[239.34px] px-[24px] py-[48px] flex flex-col gap-[24px]">
        <div className='w-[327px] h-[54px]'>
          <p className='text-[18px] leading-[27px] font-bold'>Trusted by the world's best companies &#91;social proof to build credibility&#93;</p>
        </div>
      </div>
    </section>
  )
}