import React , {useState} from 'react'
import img1 from "../Img/sign.png";
import img3 from "../Img/foot.png";
import Card from 'react-bootstrap/Card';
import "./SignupOtp.css"

const SignupOtp = () => {
    // const [otp, setOtp] = useState("");
    const [agreed, setAgreed] = useState(false);
  return (
    <>SignupOtp
      <div className="d-flex justify-content-center align-items-center my-5">
        <img className="img-fluid" src={img1} style={{ width: "50%" }} alt="" />
      </div>

      <div style={{ backgroundColor: "#701DDB" }} className="second">
        <h2> Enter OTP to continue</h2>
        
        


        
        

        



        <form>
          
          
          <label>
            OTP Sent on +919024974391 <br/>
           
              <span class="yellow-text">Change Number</span> 
             
          </label><br/>
          <div className='d-flex'>
          <Card style={{ width: '30px', height :'30px' }}>
    
    </Card>
    <Card style={{ width: '30px', height :'30px' }}>
    
    </Card>
    <Card style={{ width: '30px', height :'30px' }}>
    
    </Card>
    <Card style={{ width: '30px', height :'30px' }}>
    
    </Card>
          </div>

          
          <button className="btn bg-light px-5 bt" type="submit">
          Confirm
          </button><br/>
          <label>
            Did not received OTP? <span class="yellow-text">Resend OTP</span> 
          </label>

         
        </form>
        <footer>
        <div className="footer-image-container">
          <img src={img3} alt="" className="footer-image" />
        </div>
      </footer>
      </div>


    </>
  )
}

export default SignupOtp