import React from 'react'

export const Button = ({label,iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coreal-red">
        {label}
        <img src={iconUrl} alt="" className='ml-2 rounded-full w-3 h-9'/>
    </button>
  )
}
