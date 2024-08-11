import React from 'react'
import './MyWork.css';
import themePattern from '../../assets/theme_pattern.svg'; 
import mywork_data from '../../assets/mywork_data'; 
import arrow_icon from '../../assets/arrow_icon.svg'; 

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((Work,index)=>{
                return <img key={index} src={Work.w_img} alt=""/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork;