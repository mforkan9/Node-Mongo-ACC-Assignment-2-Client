import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router';
import Dashboard from './component/ManageItem/Dashboard/Dashboard';
import AddTour from './component/ManageItem/AddTour/AddTour';
import ShowTour from './component/ManageItem/ShowAll/ShowTour';
import Edit from './component/ManageItem/Edit/Edit';
import Details from './component/ManageItem/DetailsTour/Details';

function App() {
  return (
    <div className="">
      <ul class="navbar list-unstyled justify-content-center bg-warning fixed-top">
        <li class="nav-item">
          <h1 class=" fw-bold" >Tour Management System</h1>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route path='/' exact element={<Dashboard/>}></Route>
            <Route path='/addTour' element={<AddTour/>}></Route>
            <Route path='/showAllTour' element={<ShowTour/>}></Route>
            <Route path='/EditTour/:id' element={<Edit/>}></Route>
            <Route path='/DetailsTour/:id' element={<Details/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
