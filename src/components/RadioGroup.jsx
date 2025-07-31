import React from 'react'

const RadioGroup = ({label,name,options,register,error}) => {
  return (
    <div className='mb-4'>
        <label className='block text-sm font-medium mb-2'>{label}</label>
        <div className='flex gap-4'>
            {options.map((opt,index)=>(
                <label key={index} className='flex items-center'>
                    <input 
                    type="radio"
                    name={name} 
                    value={opt.toLowerCase()}
                    {...register(name)}
                    className='accent-blue-600'
                    />
                    {opt}
                </label>
            ))}
        </div>
        {error?.message && <p className='text-red-500 text-sm mt-1'>{error.message}</p>
        }
      
    </div>
  )
}
export default RadioGroup
