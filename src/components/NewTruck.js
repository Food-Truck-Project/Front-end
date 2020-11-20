import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialValues = {
  truckName: '',
  truckImg: '',
  cuisineType_id: ''
}

export const NewTruck = () => {
  return(
    <div>
      <form>
        <input 
          name='truckName'
          type='text'
          placeholder='Enter a Truck Name'
        /><br />
        <input 
          name='truckImg'
          type='text'
          placeholder='Enter URL for Truck Image'
        /><br />
        <h1>Cuisine Type</h1>
        <label>Asian:
          <input 
            name='cuisineType_id'
            type='radio'
            value='1'
          />
        </label>
        <label>American:
          <input 
            name='cuisineType_id'
            type='radio'
            value='2'
          />
        </label><br />
        <label>European:
          <input 
            name='cuisineType_id'
            type='radio'
            value='3'
          />
        </label>
        <label>Australian:
          <input 
            name='cuisineType_id'
            type='radio'
            value='4'
          />
        </label><br />
        <button>Submit</button>
      </form>
    </div>
  )
}