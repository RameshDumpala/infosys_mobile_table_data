import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go';
import { FiChevronRight } from 'react-icons/fi';
 

const Iphone_pro = ({expandall}) => {

  const [expandicon,setExpandicon]=useState(false)


  const handledown =()=>{
    setExpandicon(!expandicon)
  }

  return (
    <div className='maincontener'>
      <div className='header'>
        {expandicon || expandall ?
        <span><GoChevronDown className='icon' onClick={handledown} />
      
       
        </span>
        
        :
        <span><FiChevronRight className='icon' onClick={handledown} /></span>
      }
      <span><b>iphone 14 pro</b></span>
      <span className='kkv'>S# KKVOFDGGH2S</span>
      <span className='four'><span className='number'>2</span></span>
      </div>
      {expandicon || expandall ?
      <ul className='list_ul'>
          <span className='checknet'><span>Check network connection</span></span>
          <span  className='checknet'><span>Update Device</span></span>
          <ul className='list'>
            <li>Dc app didn't ping within 48h</li>
            {/* <li>Device content not up to date </li>
            <li>Device offline</li> */}
            <li>So not up to date</li>
          </ul>
        </ul>
        :""}
        
    </div>
  )
}

export default Iphone_pro