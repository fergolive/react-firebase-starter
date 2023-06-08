import React from 'react'



const Button = (props) => {
  return (
    <div className='flex flex-row p-3 gap-3 rounded-xl bg-[var(--pricolor)]
        justify-center text-[var(--darkcolorx2)] cursor-pointer max-w-lg'>
        {props.label}
    </div>
  )
}

export default Button