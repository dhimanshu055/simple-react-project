import React from 'react'
import "../BUCKS/SuName.css"
import { FaArrowRight } from "react-icons/fa";



const SuName = () => {
  return (
    <>

    <div className='container'>
    <div className='Txt'>
      <div className='contain'>
        <div className='d-flex gap-2 alignitems-center  '>
          <h2>Welcome   </h2>
          <span><FaArrowRight/></span>
        </div>
       
          <h2>Buddy</h2>
        <h4>Looks like you are  </h4>
        <h4>new to our family</h4>
      </div>
    </div>
    <div className='text-secondary '
    style={{fontSize:'50px',fontWeight:'700'}}>
      <p>Let's know each </p>
      <p>other</p>
      
      <h5 className='bg-#8A8C94'>My name is</h5>
      <div>
        <input
        type='text'
        placeholder='Ex. Rahul Sharma'
        className='in border rounded-3 px-2 form-control'
        />
        <p className='text-end'style={{fontSize:'15px',Color:'#A5A5A5', }}>0/50</p>
      </div>
      <button className="btn w-100 bt" style={{backgroundColor:'#701DDB'}} type="submit">Next</button>
    </div>
  </div>
</>
);
};


export default SuName