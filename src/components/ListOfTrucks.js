import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

export function ListOfTrucks() {
    const { push } = useHistory()

    // const editHandler = (id) => {
    //     // Should Redirect to new route with id as
    //     axiosWithAuth.get()(`/trucks/${id}`)
    //     return (
    //         console.log(id)
    //     )

    // }

    const [trucksinfo, setTrucksInfo] = useState([])
    useEffect(() => {
        axiosWithAuth().get(`/trucks`)
            .then(res => {
                // console.log('Res data : ', res);
                setTrucksInfo(res.data.data);

            })
            .catch(err => {
                console.log('Err msg : ', err);
            })
    }, []);

    return (
       <>
            <h1>Here are all the food trucks </h1>
            {trucksinfo.map((item) => {
                return (
                    <div key={item.truck_id}>
                        <h1>{item.truckName}</h1>
                        <button onClick={()=> push(`/savedtrucks/${item.truck_id}`)}>Save to favs</button>
                        <button onClick={() => push(`/truckeditor/${item.truck_id}`)}>Edit</button>
                    </div>
                )            
            })
            }
        </>
    )
}

