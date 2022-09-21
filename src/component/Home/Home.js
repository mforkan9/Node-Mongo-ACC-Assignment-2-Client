import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    

    return (
        <div className='home'>
           <div className='container'>
              <div className='row'>
                 <div className='col-md-3 '>
                    <div className='sidebar my-5 border container bg-primary '>
                        <ul className='list-unstyled '>
                            <li><Link to={'/'}><a href="#">Dashboard</a></Link> </li>
                            <li><Link to={'/showAllTour'}><a href="#">Tour Listing</a></Link> </li>
                            <li><Link to={'/addTour'}><a href="#">Add Tour</a></Link> </li>
                         
                        </ul>
                    </div>
                 </div>
                 <div className='col-md-9 '>
                     <Outlet></Outlet>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Home;