import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { JournalScreen } from "../components/journal/JournalScreen";
import { authRouter } from "./authRouter";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { firebase } from '../firebase/firebase-config'
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState( true );
  const [isLoggedIn, setIsLoggedIn] = useState( false );

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if ( user?.uid ){
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn( true );
        
        dispatch( startLoadingNotes( user.uid ) );
      }else {
        setIsLoggedIn( false );
      }
      setChecking( false );
    });
  },[dispatch, setChecking, setIsLoggedIn])//se ejecuta una sola vez
  
  if ( checking ){
    return(
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={authRouter} isAuthenticated={ isLoggedIn }/>
          <PrivateRoute exact path="/" component={JournalScreen} isAuthenticated={ isLoggedIn }/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
