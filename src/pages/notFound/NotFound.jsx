import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  // const navigate = useNavigate();

  // const backHandler = () => {
  //   navigate('/');
  // }

  return (
    <section>
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>
          Go Back Home
        </Link>
        
        {/* <button onClick={backHandler} className='btn'>Go Back Home</button> */}
      </div>
    </section>
  )
}

export default NotFound