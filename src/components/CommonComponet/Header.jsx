import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

function Header({title}) {
  return (
    <div><header className="flex items-center justify-center my-8 gap-0 lg:mx-24 font-cairo ">
    <div className="flex-grow border-t border-[2px] border-[#FB5607] h-0.5"></div>
    
    <div className="mx-0  relative lg:px-12 px-8 flex items-center   text-4xl font-bold text-[#FB5607]">
    <IoMdArrowDropleft className='  z-50 absolute right-[-14px] rotate-180' />
      {title}
      <IoMdArrowDropright className='  z-50 absolute left-[-14px] rotate-180' />
     
    </div>
    <div className="flex-grow border-t border-[2px] border-[#FB5607] h-0.5 flex items-center">
     
    </div>
  </header>
</div>
  )
}

export default Header