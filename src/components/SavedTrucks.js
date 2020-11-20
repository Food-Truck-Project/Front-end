import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const truckValues= {
truckName:''
}
export const SavedTrucks = (props) => {
    const [savedTruck, setSavedTruck] = useState([truckValues])
    const {id} = useParams()


    useEffect(() => {

        axiosWithAuth().get(`/trucks/${id}`, savedTruck)
            .then(res => { setSavedTruck(res.data[0])
        // console.log(id)
    })
            .catch(err => console.log(err))
    })
  
        return (
            <>  
                <h1>{savedTruck.truckName}</h1>
                </>
                
        )
}

