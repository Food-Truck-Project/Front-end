import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
  truckName: '',
  truckImg: '',
  cuisineType_id: ''
}

export const NewTruck = () => {
  const [newTruck, setNewTruck] = useState(initialValues)
  const userID = localStorage.getItem('userID')

  const onChange = (evt) => {
    setNewTruck({
      ...newTruck,
      [evt.target.name]: evt.target.value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    axiosWithAuth().post(`/users/${userID}/trucks`, newTruck)
      .then(res => {
        console.log(res)
        setNewTruck(initialValues)
      })
      .catch(err => console.log(err))
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name='truckName'
          type='text'
          placeholder='Enter a Truck Name'
          value={newTruck.truckName}
          onChange={onChange}
        /><br />
        <input 
          name='truckImg'
          type='text'
          placeholder='Enter URL for Truck Image'
          value={newTruck.truckImg}
          onChange={onChange}
        /><br />
        <h1>Cuisine Type</h1>
        <label>Asian:
          <input 
            name='cuisineType_id'
            type='radio'
            value='1'
            onChange={onChange}
          />
        </label>
        <label>American:
          <input 
            name='cuisineType_id'
            type='radio'
            value='2'
            onChange={onChange}
          />
        </label><br />
        <label>European:
          <input 
            name='cuisineType_id'
            type='radio'
            value='3'
            onChange={onChange}
          />
        </label>
        <label>Australian:
          <input 
            name='cuisineType_id'
            type='radio'
            value='4'
            onChange={onChange}
          />
        </label><br />
        <button>Submit</button>
      </form>
    </div>
  )
}