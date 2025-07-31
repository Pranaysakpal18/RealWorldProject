import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitUserForm, submitUserFormToAPI } from '../../Redux/UserFormSlice';
import InputField from '../InputField';
import SelectField from '../SelectField';
import RadioGroup from '../RadioGroup';
import { useForm } from 'react-hook-form';







const UserForm = () => {

    const {loading ,error}=useSelector(state =>state.userForm)

    const dispatch=useDispatch();

    const {
        register,
        handleSubmit,
        formState :{errors},
        reset
    } =useForm({
        defaultValues:{
            name:'',
            email:'',
            role:'',
            status:'active'
        }
    });

  



    // const [formData,setFormData]=useState({
    //     name:"",
    //     email:"",
    //     role:"",
    //     status:"active",
    // });

    // const [errors,setErrors]=useState({})


    // const handleChange =(e)=>{
    //     const {name,value} =e.target;
    //     setFormData(prev =>({...prev,[name]:value}));
    // };



    const onSubmit =(data)=>{
        console.log("Form Submitted",data);
        dispatch(submitUserForm(data))
        dispatch(submitUserFormToAPI(data))
        alert("User Created and sent to API!")
        reset();
    }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();

    //     let newErrors={};
    //     if(!formData.name) newErrors.name ="Name is Required";
    //     if(!formData.email) newErrors.email ="Email is Required";
    //     else if(!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email="Invalid email";
    //     if(!formData.role) newErrors.role ="Role is Required";

    //     setErrors(newErrors)


    //     if(Object.keys(newErrors).length ===0){
    //         console.log("Form Submitted", formData);

    //         dispatch(submitUserForm(formData))

    //         dispatch(submitUserFormToAPI(formData))

    //         alert("User Created and send to API!");


    //         setFormData({
    //             name:'',
    //             email:"",
    //             role:'',
    //             status:"active",
    //         })
    //     }
    // };







  return (

    <div className='max-w-md mx-auto bg-white p-6 rounded shadow'>
        {/* <h2 className='text-xl font-bold mb-4 text-center'>Create New User</h2> */}

        {loading && <p className='text-blue-600 mb-2'>Submitting User</p>}

        {error && <p className="text-red-600 mb-2">Error: {error}</p>}

        

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <InputField
               label="Name"
               name="name"
               placeholder="Enter Full Name"
               register={register}
               validation={{required :"Name is required"}}
               error={errors.name}
               
               />
                
            </div>



            <div>
                <InputField
                label='Email'
                name='email'
                placeholder="abc@gmail.com"
                register={register}
                validation={{
                    required:"Email is Required",
                    pattern:{
                        value: /^\S+@\S+\.\S+$/,
                        message:"Invalid email",
                    }
                }}
                error={errors.email}
                />
            </div>


            <div>
                {/* <label className='block mb-1 font-medium'>Role</label>
                <select 
                name="role"
                className='w-full border px-3 py-2 rounded'
                value={formData.role}
                onChange={handleChange}
                
                >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>


                </select> */}

                
                    <SelectField
                label="Role"
                name='role'
                register={register}
                options={["Admin","User"]}
                validation={{required:"Role is Required"}}
                error={errors.role}
                />
            </div>






            <div className=''>
                {/* <label className='block mb-1 font-medium'>Status</label>
                <div className='flex gap-4'>
                    <label className='flex items-center gap-1'>
                        <input 
                        type="radio"
                        name="status"
                        value="active"
                        checked={formData.status === 'active'}
                        onChange={handleChange}
                        />
                        Active
                    </label> */}

                    {/* <label className='flex items-center gap-1'>
                        <input
                         type="radio" 
                         name="status"
                         value='inactive'
                         checked={formData.status === 'inactive'}
                         onChange={handleChange}
                         />
                         Inactive
                    </label> */}


                    <RadioGroup
                    label="Status"
                    name="status"
                    register={register}
                    options={["Active","Inactive"]}
                    />                

            </div>


            <button 
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full'
            >
                Create User

            </button>
        </form>
      
    </div>
  )
}

export default UserForm
