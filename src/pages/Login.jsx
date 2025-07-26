import React from 'react'

const Login = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className='text-2xl font-bold mb-5 text-center'>Login</h1>

        <form action="">
            <div className='mb-4'>

            <label className="block mb-2 text-sm font-medium">Email</label>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder='abc@gmail.com' />
            </div>

            <div className='mb-6'>
                <label className='block mb-2 text-sm font-medium'>Password</label>
                <input className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder='Enter Password' />

            </div>

            <button className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300' type='submit'>Login</button>


        </form>
      
    </div>
  )
}

export default Login
