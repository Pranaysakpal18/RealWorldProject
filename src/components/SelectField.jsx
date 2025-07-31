import React from 'react'

const SelectField = ({label,name,register,validation,options=[],error}) => {
  return (
    <div className='mb-2'>
        <label className='block text-sm font-medium mb-1'>{label}</label>
        <select
        {...register(name,validation)}
         className='w-full p-2 border border-gray-300 rounded'
         >
            <option value="">Select {label}</option>
            {options.map((opt,index)=>(
                <option key={index} value={opt}>{opt}</option>
                
            ))}



         </select>
         {error?.message && <p className='text-red-500 text-sm mt-1'>{error.message}</p>
         }
      
    </div>
  )
}

export default SelectField
