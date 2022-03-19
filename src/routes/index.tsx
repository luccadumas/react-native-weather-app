import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../services/NavigationService";
// import { useDispatch, useSelector } from 'react-redux';

// import { getLoggedInOperator, getLoggedInOperatorRoles, getLoggedInOperatorToken } from '../util/auth';

// import AuthScreens from './Auth.routes';
import MainScreens from "./Main.routes";

// import Splash from "../pages/Splash";
// import { loadAsyncStorage } from '../store/actions';

export default function Routes() {
  // const dispatch = useDispatch();

  // const { loadingAsyncStorage, signed } = useSelector((state: any) => state.Auth);

  // const [timeOutReached, setTimedOutReached] = useState(false);

  // useEffect(() => {
  //   Promise.all([getLoggedInOperator(), getLoggedInOperatorToken(), getLoggedInOperatorRoles()])
  //     .then(([operador, token, roles]) => {
  //       dispatch(loadAsyncStorage(operador, token, roles));
  //     })
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedOutReached(true);
  //   }, 3000)
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainScreens />
      {/* {(!timeOutReached || loadingAsyncStorage) ?
        <Splash /> : */}
      {/* ( signed ? <MainScreens/> : <AuthScreens/> ) */}
      {/* } */}
    </NavigationContainer>
  );
}
