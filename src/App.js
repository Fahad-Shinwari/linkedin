import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './App.css';
import {login,logout,selectUser} from './features/userSlice'
import  {auth}  from './firebase';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Body/Sidebar/Sidebar'
import Feed from './components/Body/Feed/Feed'
import Widgets from './components/Body/Widget/Widgets'


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
         email:userAuth.email,
         uid:userAuth.uid,
         displayName:userAuth.displayName,
         photoUrl:userAuth.photoUrl
        }))
      } else {
        // use is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="App">
     <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
