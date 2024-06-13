import React from 'react'
import Btn from '../btn/Btn'

export default function Card({name = 'default', description = 'default', img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Z-Viu23Zi9aepAkisUn3zQAUzGBys45htQ&s'  }) {
  return (
    <div className="course-card" data-aos="zoom-in">
    <img src={img} alt="img" />
    <div className="course-card-body">
        <div className='course-card-heading' >{name}</div>
        <div className="course-card-descripiton">
            {description.slice(0, 80)} . . .
        </div>
        <div className="course-card-btns-box">
            <Btn label='Enroll Now' className="course-card-btn" style={{ backgroundColor: 'green' }} />
            <Btn label='Check Details' className="course-card-btn" />
        </div>
    </div>

</div>
  )
}