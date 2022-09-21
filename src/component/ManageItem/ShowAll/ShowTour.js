import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowTour = () => {
    const [allTour,setAllTour] = useState([])
    const [deleted,setDeleted] = useState(false)

    useEffect(() => {
        fetch(`https://node-mongo-acc-assignment-2-server.onrender.com/api/tour/showAll`)
        .then(res => res.json())
        .then(data => setAllTour(data.allData))
    }, [deleted])


    const handleDelete = (id) =>{
        const proced = window.confirm('are you sure delete item')
        if (proced) {
            fetch(`https://node-mongo-acc-assignment-2-server.onrender.com/api/tour/showAll/${id}`,{
                method:'DELETE'
            })
            .then(data => setDeleted(data.ok))
        }
     
    }
    

    return (
        <div>
            <h4>Tour Listing</h4>
            <div className='border my-4 table-responsive'>
                
                <table class="table align-middle mb-4 bg-white">
                    <thead class="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Actions</th> 
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTour.map(item => 
                        
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img
                                        src={item.image}
                                        alt=""
                                        style={{width: '45px', height: '45px'}}
                                        class="rounded-circle"
                                    />
                                    <div class="ms-3">
                                       <Link to={`/DetailsTour/${item._id}`}> <p class="fw-bold mb-1">{item.name}</p></Link>
                                        <p class="text-muted mb-0">$ {item.price}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">{item.country}</p>
                                <p class="text-muted mb-0">{item.city}</p>
                            </td>
                            <td>{item.duration} Days</td>
                            <td>
                                <button type="button" class="btn btn-link btn-sm btn-rounded">
                                  <Link to={`/EditTour/${item._id}`}> Edit </Link> 
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} type="button"  class="btn btn-link text-danger btn-sm btn-rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                               
                      )
                   } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowTour;