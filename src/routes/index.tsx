import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../services/NavigationService";
import MainScreens from "./Main.routes";

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainScreens />
    </NavigationContainer>
  );
}
