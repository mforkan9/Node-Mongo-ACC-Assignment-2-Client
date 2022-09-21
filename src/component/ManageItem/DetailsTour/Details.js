import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const [showDetails,setShowDetails] = useState({})

    useEffect(() => {
        fetch(`https://node-mongo-acc-assignment-2-server.onrender.com/api/tour/showAll/${id}`)
        .then(res => res.json())
        .then(data => setShowDetails(data.data))
    }, [])
    return (
        <div>
            <div className='border container'>
                <div className='container my-5'>
                <img src={showDetails.image} alt="" style={{width:'50%',height:'250px',marginRight:'150px',marginLeft:'170px'}}/>
                <div className='text-center mt-4 '>
                    <h4>Title: {showDetails.name}</h4>
                    <p>Country: {showDetails.country}</p>
                    <p>City: {showDetails.city}</p>
                    <p>Price: $ {showDetails.price}</p>
                    <p>Description: $ {showDetails.description}</p>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;