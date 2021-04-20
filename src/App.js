import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Authority from "./Components/Authority/Authority";
import ReviewData from "./Components/User/ReviewData/ReviewData";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import UserDashboard from "./Components/User/UserDashboard/UserDashboard";
import BookingData from "./Components/User/BookingData/BookingData";
import ManageData from "./Components/Authority/ManageData/ManageData";
import MakeAdmin from "./Components/Authority/MakeAdmin/MakeAdmin";
import TotalOrder from "./Components/Authority/TotalOrder/TotalOrder";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
  });

  const [service , setService] = useState({
    name : "",
    price : ""
  });


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[service , setService]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/authority">
            <Authority />
          </Route>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/user/:id">
            <UserDashboard />
          </PrivateRoute>
          <PrivateRoute path="/user">
            <UserDashboard />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ReviewData />
          </PrivateRoute>
          <PrivateRoute path="/totalOrder">
               <TotalOrder/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/manage">
            <ManageData/>
          </Route>
          <PrivateRoute>
             <BookingData/>
          </PrivateRoute>
        </Switch>
      </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
