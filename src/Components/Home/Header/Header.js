import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/firebase.config';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var user = firebase.auth().currentUser;
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to="/home" class="navbar-brand">Mobile Repair</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/home" class="nav-link active" aria-current="page">About Us</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/user" class="nav-link active" aria-current="page">Dashboard</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {
                                user ? <span class="text-success mt-2 me-2" >{user.displayName}</span> : <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
                            }
                            {
                                user ? <Link to="/home"><button onClick={signOut} class="btn btn-outline-success" type="submit">Sign Out</button></Link> : <button style={{display:'none'}}></button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;