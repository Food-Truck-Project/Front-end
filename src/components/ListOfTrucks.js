import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export function ListOfTrucks() {
    function saveHandler() {
        console.log ("Saved!")
    }
    const [trucksinfo, setTrucksInfo] = useState([])
    useEffect(() => {
        axiosWithAuth().get(`/trucks`)
            .then(res => {
                console.log('Res data : ', res);
                setTrucksInfo(res.data.data);
            })
            .catch(err => {
                console.log('Err msg : ', err);
            })
    }, []);

    return (
       <>
            <h1>Here are all the food trucks </h1>
            {trucksinfo.map((item,i) => {
                return <h1 key={i}>{item.truckName}
                    <button onClick={saveHandler}>Save to favs</button>
                </h1>              
            })
            }
        </>
    )
}

