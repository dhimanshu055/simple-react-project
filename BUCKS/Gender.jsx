import React from 'react'
import img1 from '../Img/GNR/Gmale.png'
import img2 from '../Img/GNR/Gfemale.png'
import img3 from '../Img/GNR/gnone.png'
import img4 from '../Img/GNR/Gmr.png'
import img5 from '../Img/GNR/Gfemr.png'
import img6 from '../Img/GNR/Gnonr.png'
import "../BUCKS/Gender.css"



const Gender = () => {
  return (
    <div className='text-center items-center border 2px dotted box-border  '>
      {/* first row */}
        <div className='d-flex  '>
            <div className='p-3'>
            <img src={img1} alt="male"/>
            <h6>Boy</h6>
            </div>

            <div>
            <img src={img2} alt="female" />
            <h6>Girl</h6>
            </div>

           <div>
           <img src={img3} alt="gnone" />
           <h6>No Say</h6>
            </div> 
           
        </div>
        {/* Second Row */}

        <div className='d-flex  items-center justify-center' >
            <div>
            <img src={img4}  alt="male" className="rounded-image"/>
             <h6>Boy</h6>
            </div>

            <div >
            <img src={img2} alt="female rounded" />
            <h6>Girl</h6>
            </div>

           <div>
           <img src={img3} alt="gnone rounded" />
            <h6>No Say</h6>
           </div>

        </div>
        {/* Third Row */}

        <div className='d-flex p-3'>
            <div>
            <img src={img1} alt="male" />
            <h6>Boy</h6>
            </div>

           <div>
           <img src={img5} alt="female rounded" className="rounded-image"/>
           <h6>Girl</h6>
           </div>
           
           <div>
           <img src={img3} alt="gnone" />
           <h6>No Say</h6>
           </div>

        </div>
          {/* Fourth Row */}
        <div className='d-flex p-3'>
           <div>
           <img src={img1} alt="male" />
           <h6>Boy</h6>
           </div>
          <div>
          <img src={img2} alt="female" className='' />
          <h6>Girl</h6>
          
          </div>
          <div>
          <img src={img6} alt="gnone rounded" className="rounded-image"/>
          <h6>No Say</h6>
          </div>

        </div>


    </div>
  )
}

export default Gender