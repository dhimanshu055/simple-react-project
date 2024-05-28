// // import React from 'react'
// // import { redirect } from 'react-router-dom'
// import img1 from '../Img/logo1.png'
// import img2 from '../Img/logo2.png'


// // const Ind = () => {
// //     return (
// //       <div>
// //          <div style={{ backgroundColor: '#701DDB', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       // <img src= {img1} className='img-fluid px-2' alt="brainbucks" />
//       // <img src= {img1} className='img-fluid px-2' alt="brainbucks" />
// //     </div>
          
              
// //           </div>
      
// //     )
// //   }
  
// // export default Ind




// import React, { useState } from 'react';

// const Ind = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('');

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   return (
//     <div style={{ backgroundColor: '#701DDB', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
//        <img src= {img1} className='img-fluid px-2' alt="brainbucks" />
//        <img src= {img2} className='img-fluid px-2' alt="brainbucks" />

    
//       <div style={{ marginBottom: '20px' }}>
//         <h3 style={{ color: 'white', marginBottom: '10px' }}>Select your Language</h3>
//         <select value={selectedLanguage} onChange={handleLanguageChange} style={{ padding: '5px', fontSize: '16px', borderRadius: '5px' }}>
//           <option value="">Select a language</option>
//           <option value="english">English</option>
//           <option value="spanish">Spanish</option>
//           <option value="french">French</option>
//           <option value="german">German</option>
//           <option value="italian">Italian</option>
//           <option value="hindi">हिन्दी</option>
//         </select>
//       </div>
//       <button disabled={!selectedLanguage} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'white', color: '#701DDB', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Proceed</button>
//     </div>
//   );
// };

// export default Ind;



import React, { useState } from 'react';
import img1 from '../Img/logo1.png';
import img2 from '../Img/logo2.png';

const Ind = () => {
   
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div style={{ backgroundColor: '#701DDB', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <img src={img1} className='img-fluid px-2' alt="brainbucks" />
      <img src={img2} className='img-fluid px-2' alt="brainbucks" />

      <div className='text-center mb-2' >
  
      <h3 className='text-white'>Select your language</h3><br />

      <form >
        <label className='border px-3 py-2 fs-2 text-white w-40 mb-2 rounded' style={{backgroundColor : "#A269EB"}}>
          <input
            type="radio"
            value="English"
            // checked={selectedLanguage === 'English'}
            // onChange={handleLanguage}
            style={{marginRight: "10px"}}
          />
          English
        </label>
        
        <br />
        <label className='border px-1 py-2 fs-2 text-white w-70  mb-3 rounded' style={{backgroundColor : "#A269EB"}}>
          <input
            type="radio"
            value="Hindi"
            // checked={selectedLanguage === 'Hindi'}
            // onChange={handleLanguage}
            style={{marginRight: "10px"}}
          />
          हिन्दी
        </label>
      </form>
      
    
  
      </div>
      <button disabled={selectedLanguage.length === 0} style={{ padding: '10px 70px', fontSize: '16px', backgroundColor: 'white', color: '#701DDB', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Proceed</button>
    </div>
  );
};

export default Ind;

