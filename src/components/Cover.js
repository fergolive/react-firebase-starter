import React from 'react'

const Cover = (props) => {
  return (
    <div className='flex w-full gap-4 flex-col max-w-lg'>

        <div className='flex w-full p-4 gap-4 flex-col rounded-xl bg-[var(--darkcolor)] '>
            <h1 className='text-2xl text-[var(--bgcolor)]'>{props.title}</h1>
            <p className='text-[var(--fcolor)]'>{props.subtitle}</p>
        </div>

    </div>
  )
}

export default Cover