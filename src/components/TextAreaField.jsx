import React from 'react'

const TextAreaField = ({label,name,register,placeholder,validation,error,rows=4}) => {
  return (
    <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>{label}</label>

        <textarea
        {...register(name, validation)}
         placeholder={placeholder}
         className='w-full border border-gray-400 rounded p-2'
         rows={rows}
          
          
          ></textarea>

          {error?.message && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
      
    </div>
  )
}

export default TextAreaField
