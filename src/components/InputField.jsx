import React from 'react'

const InputField = ({label,name,type,placeholder,step,min,register,validation,error}) => {
  return (
    <div className='mb-4'>
    <label className='block text-sm font-medium mb-1'>{label}</label>

    <input 
    type={type}
    placeholder={placeholder}
    step={step}
    min={min}
    {...register(name,validation)}
    className='w-full p-2 border border-gray-300 rounded'
    
    />
    {error?.message && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
      
    </div>
  )
}

export default InputField
