import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from '../store/slice/courseSlice';

const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) =>{
    return state.courses.searchTerm
  })
  return (
    <div className='listHeader'>
      <h3 className='title is-3'>Kurslarım</h3>
      <div className='search field is-horizontal'>
        <label className='label'>
          <input className='input'
          onChange={(event)=>{
            dispatch(changeSearchTerm(event.target.value))
          }}
          value={searchTerm}/>
        </label>
      </div>
    </div>
  )
}

export default CourseSearch
