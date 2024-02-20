import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()

  return (
    <div className="bg-gray-700  text-white text-3xl p-4">
        User : {userId}    
    </div>
  )
}
// className='bg-grey-600  text-white text-3xl p-4'
export default User