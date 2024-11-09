import React from 'react'
import './Program.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import programicon1 from '../../assets/Program-icon-1.png'
import programicon2 from '../../assets/Program-icon-2.png'
import programicon3 from '../../assets/Program-icon-3.png'

function Program() {
  return (
    <section className='program'>
      <div className="p-col">
        <img src={program1} alt="Program user 1" />
        <div className="caption">
          <img src={programicon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="p-col">
        <img src={program2} alt="Program user 2" />
        <div className="caption">
          <img src={programicon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="p-col">
        <img src={program3} alt="Program user 3" />
        <div className="caption">
          <img src={programicon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </section>
  )
}

export default Program
