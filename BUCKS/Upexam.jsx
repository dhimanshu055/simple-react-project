import React from "react";
import img1 from "../Img/GNR/Flr.png";
import img2 from "../Img/GNR/sbilogo.png";
import { CiSearch } from "react-icons/ci";
import "./Upexam.css";



const Upexam = () => {
  return (

    <div>
      <div className="container-fluid">
      <div className="txt ">
     
  <div>
    <h2 className="text-center align-items-center">Final Step</h2>
  </div>
  <div className="jpp">
    <img src={img1} alt="flr" className="img-fluid" />
  </div>
</div>

<div style={{ borderRadius: '30px', borderRadius: '30px', }}>
  
<h6 className="textColor">I am Preparing for</h6>


<div className="px-3 border rounded form-control d-flex" style={{ border: '2px solid black' }}>
<div className="d-flex align-items-center w-100">
<CiSearch />
<input 
type="text" 
style={{ border: 'none' }}
placeholder="Search for Exams"
className="bg-grey flex-grow-1"
/>
</div>
</div>


<div>
  <div className="d-flex justify-content-between  mt-2 border rounded ">
    <div className="d-flex  gap-2 w-100 p-2 align-items-center">
      <img src={img2} alt="Sbi Logo" />
      <h4>SBI-PO</h4>
    </div>
    <button className="btn m-1 rounded-circle"style={{backgroundColor:'#EFEFEF'}}>+</button>
  </div>

  <div className="d-flex justify-content-between mt-2 border rounded ">
    <div className="d-flex  gap-3 w-100 p-2 align-items-center">
      <img src={img2} alt="Sbi Logo" />
      <h4>SBI-PO</h4>
    </div>
    <button className="btn m-1 rounded-circle"style={{backgroundColor:'#EFEFEF'}}>+</button>
  </div>

  <div className="d-flex justify-content-between mt-2 border rounded ">
    <div className="d-flex  gap-3 w-100 p-2 align-items-center">
      <img src={img2} alt="Sbi Logo" />
      <h4>SBI-PO</h4>
    </div>
    <button className="btn m-1 rounded-circle"style={{backgroundColor:'#EFEFEF'}}>+</button>
  </div>

  <div className="d-flex justify-content-between mt-2 border rounded">
    <div className="d-flex  gap-3 w-100 p-2 align-items-center">
      <img src={img2} alt="Sbi Logo" />
      <h4>SBI-PO</h4>
    </div>
    <button className="btn m-1 rounded-circle"style={{backgroundColor:'#EFEFEF'}}>+</button>
  </div>

  <div className="d-flex justify-content-between border mt-2 rounded">
    <div className="d-flex  gap-3 w-100 p-2 align-items-center">
      <img src={img2} alt="Sbi Logo" />
      <h4>SBI-PO</h4>
    </div>
    
    <button className="btn m-1 rounded-circle"style={{ backgroundColor: '#EFEFEF' }}>+</button>
  </div>



  

 


 
</div>

<button className="btn w-100 bt mt-2 rounded" type="submit">
  Start Preparing
</button>
</div>
</div>
</div>
  );
};

export default Upexam;
