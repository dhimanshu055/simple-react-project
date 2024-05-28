import React, { useState } from "react";
import img1 from "../Img/sign.png";
import img3 from "../Img/foot.png";
import "../BUCKS/SignupOtp.css";
import "../BUCKS/BrainBucksForm.css"

const BrainBucksForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5">
        <img className="img-fluid" src={img1} style={{ width: "50%" }} alt="" />
      </div>

      <div style={{ backgroundColor: "#701DDB" }} className="second">
        <h2> Let's Crack Exams,</h2>
        <h2>Together</h2>
        {/* <img src={img2} alt="" /> */}

        <h6>Enter Your Mobile Number</h6>

        <div
          className="d-flex align-items-center border rounded p-2"
          style={{
            backgroundColor: "#A269EB",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <span className="fs-2"   style={{ color: "white", marginRight: "8px" }}>+91</span>
          <input
            type="text"
            placeholder="123 456 789"
            className="border-0 rounded px-3 py-2 flex-grow-1 fs-4"
            style={{ backgroundColor: "#A269EB", color: "#333", outline: "none" }}
          />
        </div>

        <form>
        <label className="custom-label">
      <input type="checkbox" className="custom-checkbox" /> I hereby confirm my age is{" "}
      <span className="yellow-text">18</span> years or above & agree to{" "}
      <span className="yellow-text">terms & conditions</span> and{" "}
      <span className="yellow-text">privacy policy</span> of Brain Bucks
    </label>
          <br />

          <button className="btn bg-primary px-5 bt" type="submit">
            Get OTP
          </button>
        </form>
        <footer>
          <div className="footer-image-container">
            <img src={img3} alt="" className="footer-image" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default BrainBucksForm;
