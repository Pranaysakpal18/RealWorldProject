import React, { useState } from 'react'
import TextAreaField from '../components/TextAreaField';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import UserForm from '../components/Forms/UserForm';
import { useForm } from 'react-hook-form';

const JobpostForm = () => {
    // const [formData,setFormData]=useState({
    //     title:"",
    //     department:"",
    //     location:"",
    //     salary:"",
    //     description:"",
    // });
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    }=useForm({
        defaultValues:{
            title:'',
            department:'',
            location:'',
            salary:'',
            description:''

        }
})

    // const [errors ,setErrors] =useState({})

    // const handleChange =(e)=>{
    //     setFormData({
    //         ...formData,
    //         [e.target.name] : e.target.value
    //     });

    // };

    // const validate =()=>{
    //     const newErrors ={};

    //     if(!formData.title.trim()){
    //         newErrors.title ="Job Title is Required";
    //     } else if(formData.title.length <3){
    //         newErrors.title="Job Title must be Atleast 3 characters"
    //     }



    //     if(!formData.department) {newErrors.department="Department is required";}




    //     if(!formData.location.trim()) {newErrors.location="Location is Required";}

    //     if(!formData.description.trim()){
    //     newErrors.description="description is Required";
    // } else if(formData.description.length <20){
    //         newErrors.description="Description should be atleast 20 charactors"
    //     }

    //     if(!formData.salary){
    //         newErrors.salary ="salary is Required"
    //     }else if(isNaN(formData.salary) || Number(formData.salary) <=10000){
    //         newErrors.salary="Salary must be more than 10,000";
    //     }
    //     return newErrors;


    // }

    const onSubmit=(data)=>{
        console.log("Form Submitted:" ,data)
        alert("Job Posted successfully!")
        reset()

    }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();

    //     const validationErrors =validate();
    //     if(Object.keys(validationErrors).length ===0){
    //         console.log("Form Submitted",formData)
    //         setErrors({})
    //     }else{
    //         setErrors(validationErrors);
    //     }
    // };


    




  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded mt-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
                {/* <label className="block font-medium mb-1">Job Title</label>
                <input  
                name="title"
                value={formData.title}
                onChange={handleChange}
                className='border p-2 w-full'
                /> */}

                <InputField
                label='Job Title'
                name='title'
                register={register}
                placeholder='Job Title'
                validation={{
                    required:"Job Title is Required",
                    minLength:{
                        value:3,
                        message:"Job title must Be at least 3 characters"
                    }
                }}
                error={errors.title}
                />
                
            </div>






            <div className=''>
                {/* <label className='block font-medium mb-1'>Department</label>
                <select name="department"
                value={formData.department}
                onChange={handleChange}
                className='border p-2 w-full'>
                    <option value="">Select Department</option>

                    <option value="Engineering">Engineering</option>

                    <option value="HR">HR</option>

                    <option value="Marketing">Marketing</option>
                 </select> */}

                 <SelectField
                 label="DepartMent"
                 name="department"
                 register={register}
                 options={['Engineering','HR',"Marketing"]}
                 validation={{required:'Department is required'}}
                 error ={errors.department}
                 
                 />

            </div>


            <div className=''>
                {/* <label className='block font-medium mb-1'>Location</label>
                <input name='location'
                value={formData.location}
                onChange={handleChange}
                className='border p-2 w-full'
                /> */}
                <InputField
                label="Location"
                name="location"
                register={register}
                validation={{required:'Location is Required'}}
                placeholder="Enter Location"

                error={errors.location}
                
                
                />
                
            </div>


            <div className=''>
                {/* <label className='block font-medium mb-1'>Description</label>
                <textarea name="description"
                value={formData.description}
                onChange={handleChange}
                className='border p-2 w-full'
                
                /> */}

                <TextAreaField
                label="Job Description"
                name="description"
                placeholder="Write job responsibilities, skills required, etc."
                register={register}
                validation={{
                    required:"Description is required",
                    minLength:{
                        value:20,
                        message:"Decription is at least 20 charactors"
                    }

                }}
                error={errors.description}
                
                
                />
                
            </div>


            <div className=''>
                {/* <label className='block font-medium mb-1'>Salary</label>
                <input
                name='salary'
                type='number'
                value={formData.salary}
                onChange={handleChange}
                className='border p-2 w-full'
                
                /> */}

                <InputField
                label="Salary"
                type="number"
                name="salary"
                register={register}
                validation={{
                    required:"Salary is required",
                    min:{
                        value:10000,
                        message:"Salary must be more than 10,000"
                    }
                }}
                error={errors.salary}
                />
                
            </div>

            

            <button type='submit' className='bg-blue-600 text-white px-4 py-2 mt-4 block mx-auto'>Post Job</button>





        </form>
        
             
      
    </div>
  )
}

export default JobpostForm 
