import React, {useEffect} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log('user is:', authUser)
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
        //the user is logged out
        dispatch(logout());
      }
    })
  },[dispatch])

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
     <Chat />
        </>
      ):(
        <Login />
      )}
     
    </div>
  );
}

export default App;
