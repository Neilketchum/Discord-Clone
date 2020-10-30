import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import  {selectUser, login,logout} from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
          // Logged in
          dispatch(login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName
          }))
      }else{
          dispatch(logout)
      }
    })
  },[dispatch  ])
  return (
   <div className = 'app'>
     {
       user ?(
         <>
          <Sidebar/>
          <Chat/>
         </>
       ):(
         
          <Login/>
        )
     }
      
    </div> 
  );
}

export default App;
