import React from 'react'
import img1 from "../Img/GNR/Gmr.png"
import img2 from "../Img/GNR/Gfemale.png"
import img3 from "../Img/GNR/gnone.png"
import "./SignupGender.css"

const SignupGender = () => {
  return (
    
            <>
    <div className='container'>
    <div className='Txt'>
      <div className='contain'>
        <h2>Welcome Buddy</h2>
        <h4>Looks like you are <br/> new to our family</h4>
      </div>
    </div>
    <div className='down'>
      <h5>Let's know each</h5>
      <h5>other</h5>
      <h6 className='bg-#8A8C94'>I am a</h6>


 <div  div className='img-container d-flex justify-content-center align-items-center'>
  <div className='img text-center'>
    <img src={img1} className='img-fluid' alt="boy" />
    <h6>Boy</h6>
  </div>
  <div className='img text-center'>
    <img src={img2} className='img-fluid' alt="Girl" />
    <h6>Girl</h6>
  </div>
  <div className='img text-center'>
    <img src={img3} className='img-fluid' alt="No One" />
    <h6>No Say</h6>
  </div>
</div>

      <button className="btn bg-primary px-5 bt" type="submit">Next</button>
    </div>
  </div>
</>



   
  )
}

export default SignupGender