import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [showCheapest,setShowCheapest] = useState([])
    const [mostVisit,setMostVisit] = useState([])

    useEffect(() =>{
        fetch('https://node-mongo-acc-assignment-2-server.onrender.com/api/tour')
        .then(res => res.json())
        .then(result => {
            setShowCheapest(result.data1)
            setMostVisit(result.data2)
        })
    },[])

 
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 row'>
                        <h4 className='mb-4'>Cheapest Tour</h4>
                        {
                            showCheapest.map(pd => 
                                <div className='col-md-4 '>
                            <div className='cheap-block px-2'>
                                <Link to={`/DetailsTour/${pd._id}`}>
                                <div class="card" style={{ width: '14rem' }}>
                                    <img src={pd.image} class="card-img-top" alt="..."  style={{width:'100%',height:'150px'}} />
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">{pd.name}</h5>
                                        <p class="card-title">{pd.city}</p>
                                        <p class="card-title text-primary">$ {pd.price}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>  
                          )
                        }
                    </div>
                    <div className='col-md-12 row my-4 '>
                        <h4 className='mb-4'>Most visited</h4>
                        {
                            mostVisit.map(item => 
                                <div className='col-md-4 mb-4 '>
                                <div className='cheap-block px-2'>
                                    <div class="card" style={{ width: '14rem' }}>
                                        <img src={item.image} class="card-img-top" alt="..." style={{width:'100%',height:'150px'}} />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;