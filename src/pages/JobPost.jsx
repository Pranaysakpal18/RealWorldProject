import React from 'react'
import JobpostForm from './JobpostForm'
import { useSelector } from 'react-redux'

const Jobpost = () => {
   const jobPosts = useSelector((state) => state.job?.jobPosts ?? []);
  return (
    <div>
        <h1 className='font-bold mb-5 text-2xl text-center'>Create New Job Post</h1>
        <JobpostForm/>

        <h2 className="text-xl font-bold mt-6 mb-4">📄 All Posted Jobs:</h2>

      {jobPosts.length === 0 ? (
        <p className="text-gray-500">No jobs posted yet.</p>
      ) : (
        <div className="space-y-4">
          {jobPosts.map((job, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p><strong>Department:</strong> {job.department}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> ₹{job.salary}</p>
              <p className="text-sm text-gray-700 mt-1">{job.description}</p>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}

export default Jobpost
